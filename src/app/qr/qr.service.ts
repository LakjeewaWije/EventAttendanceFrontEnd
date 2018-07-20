// Third Party Imports
import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import * as firebase from 'firebase';
import {environment} from '../../environments/environment';
import {constants} from '../utils/api-endpoint-service/api-endpoint.service';


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

    this.httpHeader;
    return this.http.post<any>(environment.baseUrl + environment.qr, {
      browserToken: token,
    }, {headers: this.httpHeader});
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
