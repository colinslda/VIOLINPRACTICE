const CACHE_NAME = 'da-capo-v1';
const ASSETS = [
  '/VIOLINPRACTICE/',
  '/VIOLINPRACTICE/index.html',
  '/VIOLINPRACTICE/styles.css',
  '/VIOLINPRACTICE/app.js'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => response || fetch(event.request))
  );
});
