importScripts("https://www.gstatic.com/firebasejs/5.2.0/firebase.js");
importScripts("https://www.gstatic.com/firebasejs/5.2.0/firebase-messaging.js");
firebase.messaging();
var config ={
  messagingSenderId: "997776762015"
};
 firebase.initializeApp(config);
const messaging = firebase.messaging();
