self.addEventListener('install', event => {
  event.waitUntil(
      caches.open('pwa-cache').then(cache => {
          return cache.addAll([
              '/',
              '/index.html',
              '/card.html',
              '/qrcode.html',
              '/style.css',
              '/login.js',
              '/card.js',
              '/qrcode.js',
              'https://rawgit.com/schmich/instascan-builds/master/instascan.min.js'
          ]);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
      caches.match(event.request).then(response => {
          return response || fetch(event.request);
      })
  );
});