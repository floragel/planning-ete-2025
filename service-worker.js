self.addEventListener("install", event => {
  console.log("Service Worker installé");
  self.skipWaiting();
});

self.addEventListener("activate", event => {
  console.log("Service Worker activé");
});

self.addEventListener("fetch", event => {
  // Laisser passer les requêtes réseau normales (aucun cache ici)
});