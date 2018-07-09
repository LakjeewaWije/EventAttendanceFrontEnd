importScripts('https://www.gstatic.com/firebasejs/5.2.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/5.2.0/firebase-messaging.js');
// Initialize Firebase
var config = {
  apiKey: 'AIzaSyBwNA6TeFfLPsz2H6Xo4diVIvFOqPqIqwM',
  authDomain: 'eventattendancefrontend.firebaseapp.com',
  databaseURL: 'https://eventattendancefrontend.firebaseio.com',
  projectId: 'eventattendancefrontend',
  storageBucket: 'eventattendancefrontend.appspot.com',
  messagingSenderId: '997776762015'
};
firebase.initializeApp(config);

const messaging = firebase.messaging();
messaging.setBackgroundMessageHandler(function(payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  // Customize notification here
  var notificationTitle = 'Background Message Title';
  var notificationOptions = {
    body: 'Background Message body.',
    icon: '/firebase-logo.png'
  };

  return self.registration.showNotification(notificationTitle,
    notificationOptions);
});
