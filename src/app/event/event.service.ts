// Third Party Imports
import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
// App Imports
import {Event} from './event-model';

// App Imports


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
   * method to create an event and save that event to event names array
   * @param {string} eventName
   */
  createEvent(eventName: string) {
    return this.http.post<any>(this.apiEndpoint.urlGenerator('event'), {
      eventName: eventName,
      eventDesc: 'lakiyaaaa event ',
      eventDateTime: this.event.getEventDate()
    }, {headers: this.httpHeader});
  }

  getEvents() {
    return this.http.get<any>(this.apiEndpoint.urlGenerator('con'), {headers: this.httpHeader});
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


