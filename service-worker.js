const cacheName = 'quillora-v1';
const assetsToCache = [
  '/',
  '/index.html',
  '/about.html',
  '/login.html',
  '/signup.html',
  '/feed.html',
  '/profile.html',
  '/gallery.html',
  '/settings.html',
  '/jobs.html',
  '/groups.html',
  '/messages.html',
  '/terms.html',
  '/privacy.html',
  '/css/main.css',
  '/js/app.js'
];

self.addEventListener('install', evt => {
  evt.waitUntil(
    caches.open(cacheName).then(cache => cache.addAll(assetsToCache))
  );
});

self.addEventListener('fetch', evt => {
  evt.respondWith(
    caches.match(evt.request).then(res => res || fetch(evt.request))
  );
});
