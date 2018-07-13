import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import 'firebase/app';
import 'firebase/messaging';
import {HttpHeaders} from '@angular/common/http';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import {FirebaseMessaging} from 'angularfire2';
import {generate} from "rxjs/index";
@Injectable({
  providedIn: 'root'
})
export class QrService {
  resposnearray = [];
  browserToken: string;
  qreventid: string;
  qreventname: string;
  qrvalue: string;
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
  setToken() {
     // this.messaging.usePublicVapidKey('BMsj59O8bkUhnr3OZmxkLx1gN-R78-BZ_TtLuPTHBLRJPD3Ed-zPrkfoRrsQ0sWpIVv2OxD04s2_PQZ7LPdKdok');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8',
      'Access-Control-Allow-Origin': '*'
    });
     this.http.post<any>('http://192.168.8.103:9000/qr', {
      browserToken: 'lakiyaisgooodbutheisgoodalso',
    }, {headers: headers}).subscribe(data => {
        console.log(data);
        // console.log(data.data);
        const  response = data.data;
        // console.log(response);
        // console.log('UUID  ' + response.uuid + '   Token  ' + response.browserToken);
        this.resposnearray[0] = response.uuid;
        this.resposnearray[1] = response.browserToken;
        // this.resposnearray.push(response.uuid);
        // this.resposnearray.push(response.browserToken);
        // console.log('UUID  ' + this.resposnearray[0]);
        // console.log('Token  ' + this.resposnearray[1]);
        // console.log('QR value' + this.qrvalue)
        console.log('QR generated');
      },
      err => {
        console.log('Error occured');
      }
    );
    this.generateQR();
  }
  generateQR() {
    this.qrvalue = '{' + '\n'  + '"eventId": ' + '"' + this.qreventid + '"' + ',' + '\n' + '"eventName": ' + '"' +  this.qreventname + '"' + ',' + '\n' + '"UUID": '   + '"' +
      this.resposnearray[0] + '"' + ',' + '\n' + '"browserToken": ' + '"' + this.resposnearray[1] + '"' + '\n' + '}' ;
    console.log('QR value' + this.qrvalue);
  }

  getparamiteredurlk(ename: string, eid: string) {
    this.qreventname = ename;
    this.qreventid = eid;
  }

}
