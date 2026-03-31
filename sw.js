const CACHE_NAME = 'clarity-v4';

self.addEventListener('install', e => {
  self.skipWaiting(); // Activate immediately, don't wait
});

self.addEventListener('activate', e => {
  // Clear all old caches
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    ).then(() => self.clients.claim()) // Take control of all pages immediately
  );
});

self.addEventListener('fetch', e => {
  // Network-first strategy: try network, fall back to cache for offline
  e.respondWith(
    fetch(e.request)
      .then(response => {
        // Cache successful responses for offline use
        if (response.ok && e.request.method === 'GET') {
          const clone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(e.request, clone));
        }
        return response;
      })
      .catch(() => caches.match(e.request)) // Offline fallback
  );
});

// Listen for update messages from the app
self.addEventListener('message', e => {
  if (e.data === 'skipWaiting') self.skipWaiting();
});
