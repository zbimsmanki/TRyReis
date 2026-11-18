// Caches the app and its built-in photos so it works offline. Own uploads live in IndexedDB.
importScripts("photos.js");
const CACHE = "wav-v3";
const PHOTOS = (self.PHOTO_COUNTS || []).flatMap((n, i) => Array.from({ length: n }, (_, j) => `img/s${i + 1}-${j + 1}.webp`));
const FILES = ["./", "index.html", "photos.js", "manifest.webmanifest", "favicon.png", "icon-180.png", "icon-192.png", "icon-512.png", ...PHOTOS];
self.addEventListener("install", e => e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)).then(() => self.skipWaiting())));
self.addEventListener("activate", e => e.waitUntil(
  caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim())
));
self.addEventListener("fetch", e => {
  if (e.request.method !== "GET" || new URL(e.request.url).origin !== location.origin) return;
  const isPhoto = new URL(e.request.url).pathname.includes("/img/");
  if (isPhoto) {
    // photos never change: cache first
    e.respondWith(caches.match(e.request).then(hit => hit || fetch(e.request)));
    return;
  }
  // app files: network first so updates arrive, cache when offline
  e.respondWith(fetch(e.request).then(r => {
    if (r.ok) { const copy = r.clone(); caches.open(CACHE).then(c => c.put(e.request, copy)); }
    return r;
  }).catch(() => caches.match(e.request, { ignoreSearch: true })));
});
