const cacheName = 'dolar-manat-v1';
const filesToCache = [
  './',
  './index.html'
];

// Yükleme sırasında dosyaları önbelleğe al
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(cacheName).then((cache) => {
      return cache.addAll(filesToCache);
    })
  );
});

// İstek geldiğinde önce cache’ten getir, yoksa internetten al
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
