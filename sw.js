// 最小 Service Worker：讓本站被視為正規 PWA。
// 不做離線快取，網路請求一律由瀏覽器照常處理。
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (event) => event.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => { /* 直接交給瀏覽器處理 */ });
