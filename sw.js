self.addEventListener("install", (event) => {
    event.waitUntil(
      caches.open("easycode-v1").then((cache) => {
        return cache.addAll([
          "/",
          "./index.html",
          "./style.css",
          "./app.js",
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
  