import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import 'firebase/app';
import 'firebase/messaging';
import {HttpHeaders} from '@angular/common/http';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class QrService {
  resposnearray = [];
  app = firebase.initializeApp( {
    apiKey: 'AIzaSyBwNA6TeFfLPsz2H6Xo4diVIvFOqPqIqwM',
    authDomain: 'eventattendancefrontend.firebaseapp.com',
    databaseURL: 'https://eventattendancefrontend.firebaseio.com',
    projectId: 'eventattendancefrontend',
    storageBucket: 'eventattendancefrontend.appspot.com',
    messagingSenderId: '997776762015'
  });
  constructor(private http: HttpClient) { }
  // Retrieve Firebase Messaging object.
   messaging = firebase.messaging();
  getTokenGG() {
     this.messaging.usePublicVapidKey('BMsj59O8bkUhnr3OZmxkLx1gN-R78-BZ_TtLuPTHBLRJPD3Ed-zPrkfoRrsQ0sWpIVv2OxD04s2_PQZ7LPdKdok');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8',
      'Access-Control-Allow-Origin': '*'
    });
     this.http.post<object>('http://localhost:9000/qr', {
      browserToken: 'lakiyaisgooodbutheisgoodalso'
    }, {headers: headers}).subscribe(data => {
        console.log(data);
        // console.log(data.data);
        const  response = data.data;
        console.log(response);
        console.log('UUID  ' + response.uuid + '   Token  ' + response.browserToken);
        this.resposnearray.push(response.uuid);
        this.resposnearray.push(response.browserToken);
        console.log('UUID  ' + this.resposnearray[0]);
        console.log('Token  ' + this.resposnearray[1]);
      },
      err => {
        console.log('Error occured');
      }
    );
  }
}
