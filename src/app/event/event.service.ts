// Third Party Imports
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

// App Imports
import {Event} from './event-model';
import {environment} from '../../environments/environment';
import { constants } from '../api-endpoint.service';



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
    this.event.setEName(eventName);

    this.httpHeader;
    this.http.post<any>(environment.baseUrl + environment.event, {
      eventName: this.event.getEventName(),
      eventDesc: 'lakiyaaaa event ',
      eventDateTime: this.event.getEventDate()
    }, {headers: this.httpHeader}).subscribe(res => {
        console.log('2');
        const eventsFromResponse = res.data;
        console.log(eventsFromResponse);
        this.events.length = 0;
        for (let i = 0; i < eventsFromResponse.length; i++) {
          this.events.push(eventsFromResponse[i]);
        }
        console.log(this.events);
        console.log('3');
      },
      err => {
        console.log('Error occurred');
      }
    );
  }

  getEvents() {

    this.httpHeader;
    this.http.get<any>(environment.baseUrl + environment.con, {headers: this.httpHeader}).subscribe(
      data => {
        console.log('3');
        const eventsFromResponse = data.data;
        // console.log(eventsFromResponse);
        this.events.length = 0;
        for (let i = 0; i < eventsFromResponse.length; i++) {
          this.events.push(eventsFromResponse[i]);
          console.log('4');
        }
        // console.log(this.events);
      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          console.log('Client-side error occurred.');
        } else {
          console.log('Server-side error occurred.');
        }
      }
    );
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


