import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import 'firebase/app';
import 'firebase/messaging';
import {HttpHeaders} from '@angular/common/http';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class QrService {
  resposnearray = [];
  browserToken: string;
  app = firebase.initializeApp( {
    apiKey: 'AIzaSyBwNA6TeFfLPsz2H6Xo4diVIvFOqPqIqwM',
    authDomain: 'eventattendancefrontend.firebaseapp.com',
    databaseURL: 'https://eventattendancefrontend.firebaseio.com',
    projectId: 'eventattendancefrontend',
    storageBucket: 'eventattendancefrontend.appspot.com',
    messagingSenderId: '997776762015'
  });
  constructor(private http: HttpClient, private route: ActivatedRoute) {

  }
  // Retrieve Firebase Messaging object.
   messaging = firebase.messaging();
  setToken(): Observable<any[]> {
     // this.messaging.usePublicVapidKey('BMsj59O8bkUhnr3OZmxkLx1gN-R78-BZ_TtLuPTHBLRJPD3Ed-zPrkfoRrsQ0sWpIVv2OxD04s2_PQZ7LPdKdok');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8',
      'Access-Control-Allow-Origin': '*'
    });
     return this.http.post<any>('http://192.168.8.104:9000/qr', {
      browserToken: 'lakiyaisgooodbutheisgoodalso',
    }, {headers: headers}).subscribe(data => {
      },
      err => {
        console.log('Error occured');
      }
    );
  }
  onResponseSuccess(response: any) {
    this.resposnearray[0] = response.uuid;
    this.resposnearray[1] = response.browserToken;
    console.log('UUID  ' + response.uuid + '   Token  ' + response.browserToken);
  }

}
