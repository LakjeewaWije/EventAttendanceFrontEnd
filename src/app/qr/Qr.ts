// // Retrieve Firebase Messaging object.
// let messaging = firebase.messaging();
// // Add the public key generated from the console here.
// messaging.usePublicVapidKey('AIzaSyBwNA6TeFfLPsz2H6Xo4diVIvFOqPqIqwM');
//
// messaging.requestPermission().then(function() {
//   console.log('Notification permission granted.');
//   // Get Instance ID token. Initially this makes a network call, once retrieved
// // subsequent calls to getToken will return from cache.
//   messaging.getToken().then(function (currentToken) {
//     if (currentToken) {
//       console.log(currentToken);
//     } else {
//       // Show permission request.
//       console.log('No Instance ID token available. Request permission to generate one.');
//     }
//   }).catch(function (err) {
//     console.log('An error occurred while retrieving token. ', err);
//   });
// }).catch(function(err) {
//   console.log('Unable to get permission to notify.', err);
// });
//
// export class Token {
//   // Retrieve Firebase Messaging object.
//    messaging = firebase.messaging();
//   usingpublickey(): void {
//     // Add the public key generated from the console here.
//     this.messaging.usePublicVapidKey('AIzaSyBwNA6TeFfLPsz2H6Xo4diVIvFOqPqIqwM');
//   }
//   requestpermission(): void {
//     this.messaging.usePublicVapidKey('AIzaSyBwNA6TeFfLPsz2H6Xo4diVIvFOqPqIqwM');
//     this.messaging.requestPermission().then(function() {
//       console.log('Notification permission granted.');
//       // Get Instance ID token. Initially this makes a network call, once retrieved
// // subsequent calls to getToken will return from cache.
//       this.messaging.getToken().then(function (currentToken) {
//         if (currentToken) {
//           console.log(currentToken);
//         } else {
//           // Show permission request.
//           console.log('No Instance ID token available. Request permission to generate one.');
//         }
//       }).catch(function (err) {
//         console.log('An error occurred while retrieving token. ', err);
//       });
//     }).catch(function(err) {
//       console.log('Unable to get permission to notify.', err);
//     });
//   }
// }

