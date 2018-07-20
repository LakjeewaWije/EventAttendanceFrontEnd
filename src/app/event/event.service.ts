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
import { constants } from '../utils/api-endpoint-service/api-endpoint.service';



@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http: HttpClient) {
  }
    event = new Event(); // instantiating the event class
    events = [];
    httpHeader = constants.headers;

  /**
   * method to create an event and save that event to event names array
   * @param {string} eventName
   */
  createEvent(eventName: string) {
    this.httpHeader;
    return this.http.post<any>(environment.baseUrl + environment.event, {
      eventName: eventName,
      eventDesc: 'lakiyaaaa event ',
      eventDateTime: this.event.getEventDate()
    }, {headers: this.httpHeader});
  }

  getEvents() {
    this.httpHeader;
    return this.http.get<any>(environment.baseUrl + environment.con, {headers: this.httpHeader});
  }

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


