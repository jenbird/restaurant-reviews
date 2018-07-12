// Service worker install

let cacheName = "restaurantCache-v1";
let filesToCache = [
  '/index.html',
  '/restaurant.html',
  '/js/main.js',
  '/js/restaurant_info.js',
  '/js/dbhelper.js',
  '/css/styles.css',
  '/img/1.jpg',
  '/img/2.jpg',
  '/img/3.jpg',
  '/img/4.jpg',
  '/img/5.jpg',
  '/img/6.jpg',
  '/img/7.jpg',
  '/img/8.jpg',
  '/img/9.jpg',
  '/img/10.jpg',
  '/data/restaurants.json'
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener('fetch', function(event) {
	const url = new URL(event.request.url);

    event.respondWith(
        caches.match(url.pathname).then(function(response) {
            return response || fetch(event.request);
        })
    );
});
