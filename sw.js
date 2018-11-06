//https://gist.github.com/kosamari/7c5d1e8449b2fbc97d372675f16b566e

let APP_PREFIX = 'RestaurantReviews_'     // Identifier for this app (this needs to be consistent across every cache update)
let VERSION = 'version_01'              // Version of the off-line cache (change this value everytime you want to update cache)
let CACHE_NAME = APP_PREFIX + VERSION
let URLS= [
  /* File list when running from a local machine
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
  '/data/restaurants.json',
  */

  // Covers GitHub pages URL
  '/restaurant-reviews/',
  '/restaurant-reviews/index.html',
  '/restaurant-reviews/restaurant.html',
  '/restaurant-reviews/restaurant.html?id=1',
  '/restaurant-reviews/restaurant.html?id=2',
  '/restaurant-reviews/restaurant.html?id=3',
  '/restaurant-reviews/restaurant.html?id=4',
  '/restaurant-reviews/restaurant.html?id=5',
  '/restaurant-reviews/restaurant.html?id=6',
  '/restaurant-reviews/restaurant.html?id=7',
  '/restaurant-reviews/restaurant.html?id=8',
  '/restaurant-reviews/restaurant.html?id=9',
  '/restaurant-reviews/restaurant.html?id=10',
  '/restaurant-reviews/js/main.js',
  '/restaurant-reviews/js/restaurant_info.js',
  '/restaurant-reviews/js/dbhelper.js',
  '/restaurant-reviews/css/styles.css',
  '/restaurant-reviews/data/restaurants.json'
];


// Respond with cached resources
self.addEventListener('fetch', function (e) {
  console.log('fetch request : ' + e.request.url)
  e.respondWith(
    caches.match(e.request).then(function (request) {
      if (request) { // if cache is available, respond with cache
        console.log('responding with cache : ' + e.request.url)
        return request
      } else {       // if there are no cache, try fetching request
        console.log('file is not cached, fetching : ' + e.request.url)
        return fetch(e.request)
      }

      // You can omit if/else for console.log & put one line below like this too.
      // return request || fetch(e.request)
    })
  )
})

// Cache resources
self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      console.log('installing cache : ' + CACHE_NAME)
      return cache.addAll(URLS)
    })
  );
});

// Delete outdated caches
self.addEventListener('activate', function(e) {
	e.waitUntil(
    caches.keys().then(function (keyList) {
      // `keyList` contains all cache names under your username.github.io
      // filter out ones that has this app prefix to create white list
      var cacheWhitelist = keyList.filter(function (key) {
        return key.indexOf(APP_PREFIX)
      })
      // add current cache name to white list
      cacheWhitelist.push(CACHE_NAME)

      return Promise.all(keyList.map(function (key, i) {
        if (cacheWhitelist.indexOf(key) === -1) {
          console.log('deleting cache : ' + keyList[i] )
          return caches.delete(keyList[i])
        }
      }))
    })
  )
})
