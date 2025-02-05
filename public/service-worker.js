const CACHE_NAME = 'hashveno-cache-v2.0.1';
const FILES_TO_CACHE = [
    '/',
    '/index.html',
    '/manifest.json',
    "/assets/HashVenoLogos/favicon-192x192.png",
    "/assets/HashVenoLogos/favicon-512x512.png",
    "/assets/HashVenoLogos/favicon-144x144.png",
    "/assets/HashVenoLogos/favicon-1024x768.jpg",
    "/assets/HashVenoLogos/favicon-320x320.png",
    '/sitemap.xml',
];

/* Install Event */
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            console.log('Caching files');
            return cache.addAll(FILES_TO_CACHE);
        })
    );
});

/* Fetch event */
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request).then((networkResponse) => {
                return caches.open(CACHE_NAME).then((cache) => {
                    cache.put(event.request, networkResponse.clone());
                    return networkResponse;
                });
            });
        })
    );
});

/* Activate event */
self.addEventListener('activate', (event) => {
    console.log('Service Worker activating.');
    // Clean up old caches if needed
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((name) => {
                    if (name !== CACHE_NAME) {
                        console.log('Deleting old cache:', name);
                        return caches.delete(name);
                    }
                })
            );
        })
    );
});

