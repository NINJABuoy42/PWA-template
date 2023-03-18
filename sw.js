self.addEventListener("install",e =>{
  // console.log('install');
  e.waitUntil(
    caches.open("static").then(cache =>{
      return cache.addAll([
        "./",
        "./index.html",
        "./assets/css/master.css",
        "./assets/js/index.js",
        "./assets/img/icons/icon-72x72.png",
        "./assets/img/icons/icon-96x96.png",
        "./assets/img/icons/icon-128x128.png",
        "./assets/img/icons/icon-144x144.png",
        "./assets/img/icons/icon-152x152.png",
        "./assets/img/icons/icon-192x192.png",
        "./assets/img/icons/icon-384x384.png",
        "./assets/img/icons/icon-512x512.png"
      ]);
    })
  );
});

self.addEventListener('fetch',e =>{
  e.respondWith(
    caches.match(e.request).then(response =>{
      return response || fetch(e.request);
    })
  )
});