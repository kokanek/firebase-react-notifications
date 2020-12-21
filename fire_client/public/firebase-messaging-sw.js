// Scripts for firebase and firebase messaging
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing the generated config
const firebaseConfig = {
  apiKey: "AIzaSyBXAFWdnCz5SNYKJVXUC01Y70DhYgAgSqo",
  authDomain: "storemax-50908.firebaseapp.com",
  projectId: "storemax-50908",
  storageBucket: "storemax-50908.appspot.com",
  messagingSenderId: "606599051782",
  appId: "1:606599051782:web:e53a0dfd668450c729a187"
};

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log('Received background message ', payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle,
    notificationOptions);
});
