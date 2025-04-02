self.addEventListener("install", (event) => {
    event.waitUntil(
      caches.open("easycode-v1").then((cache) => {
        return cache.addAll([
          "/",
          "./index.html",
          "./style.css",
          "./app.js",
          "./easy-icon-192x192.png",
          "./easy-icon-512x512.png",
        ]);
      })
    );
  });
  
  self.addEventListener("fetch", (event) => {
    event.respondWith(
      caches.match(event.request).then((response) => {
        return response || fetch(event.request);
      })
    );
  });
  