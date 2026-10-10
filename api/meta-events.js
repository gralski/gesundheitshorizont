const PIXEL_ID = process.env.META_PIXEL_ID || '2159506951617229';
const ACCESS_TOKEN = process.env.META_CAPI_ACCESS_TOKEN;
const GRAPH_API_VERSION = process.env.META_GRAPH_API_VERSION || 'v23.0';
const ALLOWED_EVENTS = new Set([
  'PageView',
  'ViewContent',
  'AddToCart',
  'InitiateCheckout',
  'Purchase',
  'ShopClick'
]);
const ALLOWED_CUSTOM_DATA = new Set([
  'content_name',
  'content_ids',
  'content_type',
  'currency',
  'value',
  'num_items',
  'package_name',
  'cta_location',
  'cta_text',
  'funnel_name',
  'trigger'
]);

function firstHeader(value) {
  return typeof value === 'string' ? value.split(',')[0].trim() : undefined;
}

function cleanCustomData(value) {
  if (!value || typeof value !== 'object' || Array.isArray(value)) return {};

  return Object.fromEntries(
    Object.entries(value).filter(([key, entry]) => {
      if (!ALLOWED_CUSTOM_DATA.has(key)) return false;
      return typeof entry === 'string' || typeof entry === 'number' ||
        typeof entry === 'boolean' || Array.isArray(entry);
    })
  );
}

function isTrustedEventUrl(value) {
  try {
    var url = new URL(value);
    return url.protocol === 'https:' &&
      (url.hostname === 'gesundheitshorizont.de' || url.hostname === 'www.gesundheitshorizont.de');
  } catch (_error) {
    return false;
  }
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  if (!ACCESS_TOKEN) {
    // Avoid exposing deployment configuration while still keeping tracking non-blocking.
    return res.status(204).end();
  }

  var body = req.body || {};
  if (!ALLOWED_EVENTS.has(body.event_name) ||
      typeof body.event_id !== 'string' || body.event_id.length > 128 ||
      !isTrustedEventUrl(body.event_source_url)) {
    return res.status(400).json({ error: 'Invalid event' });
  }

  var userData = {
    client_ip_address: firstHeader(req.headers['x-forwarded-for']),
    client_user_agent: req.headers['user-agent'],
    fbp: typeof body.fbp === 'string' ? body.fbp.slice(0, 512) : undefined,
    fbc: typeof body.fbc === 'string' ? body.fbc.slice(0, 512) : undefined
  };

  Object.keys(userData).forEach((key) => userData[key] === undefined && delete userData[key]);

  try {
    var response = await fetch(
      `https://graph.facebook.com/${GRAPH_API_VERSION}/${PIXEL_ID}/events?access_token=${encodeURIComponent(ACCESS_TOKEN)}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          data: [{
            event_name: body.event_name,
            event_time: Math.floor(Date.now() / 1000),
            event_id: body.event_id,
            event_source_url: body.event_source_url,
            action_source: 'website',
            user_data: userData,
            custom_data: cleanCustomData(body.custom_data)
          }]
        })
      }
    );

    if (!response.ok) {
      console.error('Meta CAPI rejected event', response.status);
      return res.status(502).json({ error: 'Event delivery failed' });
    }
  } catch (error) {
    console.error('Meta CAPI request failed', error);
    return res.status(502).json({ error: 'Event delivery failed' });
  }

  return res.status(204).end();
}
