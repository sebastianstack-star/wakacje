self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('wakacje').then(cache => {
      return cache.addAll([
        '/wakacje/',
        '/wakacje/index.html'
      ]);
    })
  );
});
