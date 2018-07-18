importScripts('https://www.gstatic.com/firebasejs/4.1.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/4.1.1/firebase-messaging.js');
importScripts('https://www.gstatic.com/firebasejs/4.1.1/firebase.js');


var config = {
  apiKey: "AIzaSyAWVvtr9WUb5xNPQjKMu12M-Fr_uy-EZJY",
  authDomain: "event-attendance-54b25.firebaseapp.com",
  databaseURL: "https://event-attendance-54b25.firebaseio.com",
  projectId: "event-attendance-54b25",
  storageBucket: "event-attendance-54b25.appspot.com",
  messagingSenderId: "86891543279"
};
firebase.initializeApp(config);
const messaging = firebase.messaging();

// messaging.setBackgroundMessageHandler(function(payload) {
//   console.log('[firebase-messaging-sw.js] Received background message ', payload);
//   // Customize notification here
//   const notificationTitle = 'Background Message Title';
//   const notificationOptions = {
//     body: 'Background Message body.',
//     icon: '/firebase-logo.png'
//   };
//
//   return self.registration.showNotification(notificationTitle,
//     notificationOptions);
// });
