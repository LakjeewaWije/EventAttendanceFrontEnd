// Third Party Imports
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
// import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
// App Imports
import {Event} from './event-model';
import {environment} from '../../environments/environment';
import {ApiEndpointService, constants} from '../utils/api-endpoint-service/api-endpoint.service';



@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http: HttpClient, private apiEndpoint: ApiEndpointService) {
  }
    event = new Event(); // instantiating the event class
    events = [];
    httpHeader = constants.headers;

  /**
   * send the created event to the backend through a request and get all the event that has been created so far through the response
   * @param {string} eventName
   */
  createEvent(eventName: string) {
    return this.http.post<any>(this.apiEndpoint.urlGenerator('event'), {
      eventName: eventName,
      eventDesc: 'lakiyaaaa event ',
      eventDateTime: this.event.getEventDate()
    }, {headers: this.httpHeader});
  }

  /**
   * get all the events that has been created so far through a get request
   * @returns {Observable<Object>}
   */
  getEvents() {
    return this.http.get<any>(this.apiEndpoint.urlGenerator('con'), {headers: this.httpHeader});
  }

  /**
   * uses to get the specific FCM token from firebase
   */
  getFcmToken() {
    firebase.messaging().requestPermission().then(function() {
      console.log('Notification permission granted.');

      firebase.messaging().getToken()
        .then(function(currentToken) {
          if (currentToken) {
            localStorage.setItem('browserToken', currentToken);
            console.log(currentToken);
          } else {
            console.log('No Instance ID token available. Request permission to generate one.');
          }
        });
    }).catch(function(err) {

      console.log('Unable to get permission to notify.', err);
    });
    firebase.messaging().onMessage(function(payload) {
      console.log('On message: ', payload);
    });

  }
}


