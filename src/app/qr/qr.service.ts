// Third Party Imports
import { Injectable } from '@angular/core';
import {HttpHeaders} from '@angular/common/http';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import * as firebase from 'firebase';
import {environment} from '../../environments/environment';
import {constants} from '../api-endpoint.service';


@Injectable({
  providedIn: 'root'
})
export class QrService {

  browserToken: string;
  httpHeader = constants.headers;

  constructor(private http: HttpClient) {

  }

  // Retrieve Firebase Messaging object.
  sendToken(token: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8',
      'Access-Control-Allow-Origin': '*'
    });
    return this.http.post<any>(environment.baseUrl + environment.qr, {
      browserToken: token,
    }, {headers: headers});
  }

  reloadPage() {
    firebase.messaging().requestPermission().then(function() {
      console.log('Notification permission granted.');
    }).catch(function(err) {
      console.log('Unable to get permission to notify.', err);
    });
    firebase.messaging().onMessage(function(payload) {
      console.log('On message: ', payload);
      location.reload();
    });
  }

}
