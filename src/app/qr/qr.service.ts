// Third Party Imports
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import * as firebase from 'firebase';
import {constants} from '../utils/api-endpoint-service/api-endpoint.service';
import { ApiEndpointService } from '../utils/api-endpoint-service/api-endpoint.service';



@Injectable({
  providedIn: 'root',

})

export class QrService {

  browserToken: string;
  httpHeader = constants.headers;

  constructor(private http: HttpClient, private apiEndpoints: ApiEndpointService) {

  }

  /**
   * sends the FCM token to backend and get FCM token and UUID on response
   * @param {string} token
   * @returns {Observable<any>}
   */
  generateQR(token: string): Observable<any> {
    return this.http.post<any>(this.apiEndpoints.urlGenerator('qr'), {
      browserToken: token,
    }, {headers: this.httpHeader});
  }



  /**
   * Reloads the page when an user registered  successfully by scanning a qr code in the console
   */
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
