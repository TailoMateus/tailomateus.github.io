self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('your-magic-cache').then(function(cache) {
      return cache.addAll([
        '/',
        '/blog',
        '/site.js',
        '/css/main.css',
        'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css',
        'https://fonts.googleapis.com/css?family=Raleway:400,700',
        '/images/profile.jpg',
        '/js/script.js',
      ]);
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});
