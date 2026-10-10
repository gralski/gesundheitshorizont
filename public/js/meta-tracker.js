(function () {
  var ENDPOINT = '/api/meta-events';
  var PAGE_VIEW_KEY = 'gh_meta_page_view_sent:' + window.location.pathname + window.location.search;

  function eventId() {
    if (window.crypto && typeof window.crypto.randomUUID === 'function') {
      return 'gh_' + window.crypto.randomUUID();
    }
    return 'gh_' + Date.now().toString(36) + '_' + Math.random().toString(36).slice(2, 12);
  }

  function getCookie(name) {
    var prefix = name + '=';
    var cookies = document.cookie ? document.cookie.split(';') : [];
    for (var i = 0; i < cookies.length; i += 1) {
      var cookie = cookies[i].trim();
      if (cookie.indexOf(prefix) === 0) return decodeURIComponent(cookie.slice(prefix.length));
    }
    return undefined;
  }

  function sendServerEvent(payload) {
    var body = JSON.stringify(payload);
    if (navigator.sendBeacon) {
      var queued = navigator.sendBeacon(ENDPOINT, new Blob([body], { type: 'application/json' }));
      if (queued) return;
    }

    fetch(ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: body,
      keepalive: true,
      credentials: 'same-origin'
    }).catch(function () {
      // Tracking must never affect the visitor experience.
    });
  }

  function track(eventName, customData) {
    var id = eventId();
    var data = customData || {};
    var isStandardEvent = eventName === 'PageView' || eventName === 'ViewContent' ||
      eventName === 'AddToCart' || eventName === 'InitiateCheckout' || eventName === 'Purchase';

    if (typeof window.fbq === 'function') {
      window.fbq(isStandardEvent ? 'track' : 'trackCustom', eventName, data, { eventID: id });
    }

    sendServerEvent({
      event_name: eventName,
      event_id: id,
      event_source_url: window.location.href,
      custom_data: data,
      fbp: getCookie('_fbp'),
      fbc: getCookie('_fbc')
    });

    return id;
  }

  window.GHMeta = window.GHMeta || { track: track };

  // A session guard prevents accidental duplicate PageViews when a page embeds
  // this script more than once. The browser and server events share eventID,
  // allowing Meta to deduplicate the pair.
  if (!sessionStorage.getItem(PAGE_VIEW_KEY)) {
    sessionStorage.setItem(PAGE_VIEW_KEY, '1');
    track('PageView');
  }
})();
