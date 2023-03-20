// Choose a cache name
const cacheName = 'cache-v1';
// List the files to precache
const precacheResources =
    ['/', '/index.html', '/favicon.ico', '/logo192.png', '/logo512.png', '/manifest.json'
        ,'./src/App.css','./src/index.css'];

// When the service worker is installing, open the cache and add the precache resources to it
// eslint-disable-next-line no-restricted-globals
self.addEventListener('install', (event) => {
    console.log('Service worker install event!');
    event.waitUntil(caches.open(cacheName).then((cache) => cache.addAll(precacheResources)));
});

// eslint-disable-next-line no-restricted-globals
self.addEventListener('activate', (event) => {
    console.log('Service worker activate event!');
});

// When there's an incoming fetch request, try and respond with a precached resource, otherwise fall back to the network
// eslint-disable-next-line no-restricted-globals
self.addEventListener('fetch', (event) => {
    console.log('Fetch intercepted for:', event.request.url);
    event.respondWith(
        caches.match(event.request).then((cachedResponse) => {
            if (cachedResponse) {
                return cachedResponse;
            }
            return fetch(event.request);
        }),
    );
});
/*self.addEventListener('fetch', (event) => {
    console.log('Fetch intercepted for:', event.request.url);
    event.respondWith(
        caches.match(event.request).then((cachedResponse) => {
            if (cachedResponse) {
                return cachedResponse;
            }
            return fetch(event.request);
        }),
    );
    event.respondWith(
        caches.open(cacheName).then(function(cache){
            return cache.match(event.request).then(function(response){
                var fetchPromise = fetch(event.request).then(function(networkResponse)
                {
                    cache.put(event.request,networkResponse.clone());
                    return networkResponse;
                })
                return response || fetchPromise;
            })
        })
    );
});*/