import { Injectable } from '@angular/core';
import 'firebase/messaging';
import firebase from 'firebase/app';
@Injectable({
  providedIn: 'root'
})
export class QrService {
  app = firebase.initializeApp( {
    apiKey: 'AIzaSyBwNA6TeFfLPsz2H6Xo4diVIvFOqPqIqwM',
    authDomain: 'eventattendancefrontend.firebaseapp.com',
    databaseURL: 'https://eventattendancefrontend.firebaseio.com',
    projectId: 'eventattendancefrontend',
    storageBucket: 'eventattendancefrontend.appspot.com',
    messagingSenderId: '997776762015'
  });
  constructor() { }
  // Retrieve Firebase Messaging object.
   messaging = firebase.messaging();
  getTokenGG() {
     // this.messaging.useServiceWorker();
    this.messaging.usePublicVapidKey('BMsj59O8bkUhnr3OZmxkLx1gN-R78-BZ_TtLuPTHBLRJPD3Ed-zPrkfoRrsQ0sWpIVv2OxD04s2_PQZ7LPdKdok');
    // console.log(this.messaging.getToken());
  }

}
