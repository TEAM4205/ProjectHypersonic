importScripts("https://www.gstatic.com/firebasejs/10.7.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.7.0/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyBbpNlnqFId7mDqj4K59e2My_xS2ClorNw",
  authDomain: "prdb-49c65.firebaseapp.com",
  projectId: "prdb-49c65",
  messagingSenderId: "539452338726",
  appId: "1:539452338726:web:13018716eca609859d2ce7",
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  self.registration.showNotification(payload.notification?.title ?? "Notificación", {
    body: payload.notification?.body ?? "",
    icon: "/icons/Icon-192.png",
  });
});

// Necesario para que Flutter no rompa el SW
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (event) => {
  event.waitUntil(self.clients.claim());
});