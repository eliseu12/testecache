const CACHE_NAME = 'audio-player-v1';
const ASSETS = [
  '/',
  '/index.html',
  '/service-worker.js',
  'https://archive.org/download/6_20250430_20250430/1.MP3',
  // … demais faixas …
];

self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS)));
});

self.addEventListener('fetch', event => {
  event.respondWith(caches.match(event.request).then(resp => resp || fetch(event.request)));
});
