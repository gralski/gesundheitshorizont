(function () {
  var STORAGE_KEY = 'gh_funnel_events_v1';
  var SESSION_KEY = 'gh_funnel_session_v1';
  var MAX_EVENTS = 5000;

  function nowIso() {
    return new Date().toISOString();
  }

  function safeParse(value, fallback) {
    if (!value) return fallback;
    try {
      return JSON.parse(value);
    } catch (_error) {
      return fallback;
    }
  }

  function readEvents() {
    return safeParse(localStorage.getItem(STORAGE_KEY), []);
  }

  function writeEvents(events) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(events.slice(-MAX_EVENTS)));
  }

  function getSessionId() {
    var existing = sessionStorage.getItem(SESSION_KEY);
    if (existing) return existing;

    var id = 'sess_' + Date.now().toString(36) + '_' + Math.random().toString(36).slice(2, 10);
    sessionStorage.setItem(SESSION_KEY, id);
    return id;
  }

  function toNumber(value, fallback) {
    var n = Number(value);
    return Number.isFinite(n) ? n : fallback;
  }

  function forwardToGa4(eventName, props) {
    if (typeof window.gtag !== 'function') return;

    var payload = Object.assign({
      funnel_name: 'dermapuris_to_derma_renew',
      page_path: window.location.pathname,
      transport_type: 'beacon'
    }, props || {});

    window.gtag('event', eventName, payload);

    if (eventName === 'view_content') {
      window.gtag('event', 'view_item', {
        currency: payload.currency || 'EUR',
        value: toNumber(payload.value, 0),
        items: [{
          item_id: payload.item_id || 'derma-renew-complex',
          item_name: payload.item_name || 'Derma Renew Komplex',
          quantity: toNumber(payload.quantity, 1),
          price: toNumber(payload.value, 0)
        }],
        funnel_name: 'dermapuris_to_derma_renew',
        transport_type: 'beacon'
      });
    }

    if (eventName === 'initiate_checkout') {
      window.gtag('event', 'begin_checkout', {
        currency: payload.currency || 'EUR',
        value: toNumber(payload.value, 0),
        items: [{
          item_id: payload.item_id || 'derma-renew-complex',
          item_name: payload.item_name || 'Derma Renew Komplex',
          quantity: toNumber(payload.quantity, 1),
          price: toNumber(payload.value, 0)
        }],
        funnel_name: 'dermapuris_to_derma_renew',
        transport_type: 'beacon'
      });
    }

    if (eventName === 'purchase') {
      window.gtag('event', 'purchase', {
        transaction_id: payload.transaction_id || ('manual_' + Date.now()),
        currency: payload.currency || 'EUR',
        value: toNumber(payload.value, 0),
        items: [{
          item_id: payload.item_id || 'derma-renew-complex',
          item_name: payload.item_name || 'Derma Renew Komplex',
          quantity: toNumber(payload.quantity, 1),
          price: toNumber(payload.value, 0)
        }],
        funnel_name: 'dermapuris_to_derma_renew',
        transport_type: 'beacon'
      });
    }
  }

  function forwardToMeta(eventName, props) {
    if (typeof window.fbq !== 'function') return;

    if (eventName === 'view_content') {
      window.fbq('track', 'ViewContent', {
        content_name: props.item_name || 'Derma Renew Komplex',
        content_ids: [props.item_id || 'derma-renew-complex'],
        content_type: 'product',
        value: toNumber(props.value, 0),
        currency: props.currency || 'EUR'
      });
    }

    if (eventName === 'add_to_cart') {
      window.fbq('track', 'AddToCart', {
        content_name: props.item_name || 'Derma Renew Komplex',
        content_ids: [props.item_id || 'derma-renew-complex'],
        content_type: 'product',
        value: toNumber(props.value, 0),
        currency: props.currency || 'EUR',
        num_items: toNumber(props.quantity, 1)
      });
    }

    if (eventName === 'initiate_checkout') {
      window.fbq('track', 'InitiateCheckout', {
        content_name: props.item_name || 'Derma Renew Komplex',
        content_ids: [props.item_id || 'derma-renew-complex'],
        content_type: 'product',
        value: toNumber(props.value, 0),
        currency: props.currency || 'EUR',
        num_items: toNumber(props.quantity, 1)
      });
    }

    if (eventName === 'purchase') {
      window.fbq('track', 'Purchase', {
        content_name: props.item_name || 'Derma Renew Komplex',
        content_ids: [props.item_id || 'derma-renew-complex'],
        content_type: 'product',
        value: toNumber(props.value, 0),
        currency: props.currency || 'EUR',
        num_items: toNumber(props.quantity, 1)
      });
    }
  }

  function track(eventName, props) {
    var payload = props || {};
    var entry = {
      id: 'evt_' + Date.now().toString(36) + '_' + Math.random().toString(36).slice(2, 8),
      event: eventName,
      ts: nowIso(),
      path: window.location.pathname,
      url: window.location.pathname + window.location.search,
      referrer: document.referrer || null,
      session_id: getSessionId(),
      props: payload
    };

    var events = readEvents();
    events.push(entry);
    writeEvents(events);

    forwardToGa4(eventName, payload);
    forwardToMeta(eventName, payload);

    window.dispatchEvent(new CustomEvent('gh_funnel_event', { detail: entry }));

    return entry;
  }

  function trackOnce(key, eventName, props) {
    var onceKey = 'gh_funnel_once_' + key;
    if (sessionStorage.getItem(onceKey)) return null;
    sessionStorage.setItem(onceKey, '1');
    return track(eventName, props);
  }

  function getEvents() {
    return readEvents();
  }

  function clearEvents() {
    localStorage.removeItem(STORAGE_KEY);
    Object.keys(sessionStorage).forEach(function (key) {
      if (key.indexOf('gh_funnel_once_') === 0) {
        sessionStorage.removeItem(key);
      }
    });
  }

  function buildSummary(options) {
    var opts = options || {};
    var sinceTs = opts.sinceTs ? new Date(opts.sinceTs).getTime() : 0;
    var pathFilter = opts.path || null;

    var counts = {
      link_click: 0,
      landing_page_view: 0,
      view_content: 0,
      add_to_cart: 0,
      initiate_checkout: 0,
      purchase: 0
    };

    readEvents().forEach(function (entry) {
      var entryTs = new Date(entry.ts).getTime();
      if (entryTs < sinceTs) return;
      if (pathFilter && entry.path !== pathFilter) return;
      if (!Object.prototype.hasOwnProperty.call(counts, entry.event)) return;
      counts[entry.event] += 1;
    });

    return counts;
  }

  window.GHFunnel = {
    version: '1.0.0',
    track: track,
    trackOnce: trackOnce,
    getEvents: getEvents,
    clearEvents: clearEvents,
    buildSummary: buildSummary
  };
})();
