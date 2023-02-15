const cacheName = "cache-v1";

const filesToCache = [
  "/",
  "index.html",
  "offline.html",
  "icons/rain.png",
  "style.css",
  "responsive.css",
];

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(cacheName).then((cache) => cache.addAll(filesToCache))
  );
});

self.addEventListener("activate", (e) => {
  let cacheWhiteList = [];
  cacheWhiteList.push(cacheName);

  e.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames.map((cache) => {
          if (!cacheWhiteList.includes(cache)) {
            return caches.delete(cache);
          }
        })
      )
    )
  );
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then(() => {
      console.log("fetching");
      return fetch(e.request).catch(() => caches.match("offline.html"));
    })
  );
});
