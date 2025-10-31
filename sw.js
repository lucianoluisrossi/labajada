// sw.js
// Este service worker es el mínimo necesario para que la app sea instalable (PWA).

self.addEventListener('install', (event) => {
  console.log('Service Worker instalándose...');
  // No esperamos aquí para mantenerlo simple
});

self.addEventListener('activate', (event) => {
  console.log('Service Worker activado.');
});

self.addEventListener('fetch', (event) => {
  // Simplemente responde desde la red (comportamiento por defecto).
  // Solo tener este oyente 'fetch' es suficiente para
  // que Chrome considere la app como "instalable".
  event.respondWith(fetch(event.request));
});