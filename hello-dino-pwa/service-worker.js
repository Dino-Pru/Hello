const cacheName = 'dino-cache-v1';
const assets = [
  '/',
  '/index.html',
  '/app.js',
  '/pink teddy.jpg'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(cacheName).then(cache => cache.addAll(assets))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(res => res || fetch(event.request))
  );
});