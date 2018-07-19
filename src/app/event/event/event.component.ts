// Third Party Imports
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import * as firebase from 'firebase';

// App Imports
import {EventService} from '../event.service';


@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {


  name: string; // stores the event name
  events = []; // stores all event name returned by  getEvent method from event service
  fcmToken: string;

  constructor(private eventService: EventService, private http: HttpClient, private route: ActivatedRoute) {
  }

  /**
   * calling the create even method in event service
   * @constructor
   */
  ngOnInit(): void {
    console.log('1');
    this.events = this.eventService.events;
    this.eventService.getEvents();
    console.log('2');
    this.receiveToken();
  }

  createEvent() {
    console.log('1');
    this.eventService.createEvent(this.name);
    console.log('4');
    this.events = this.eventService.events;
    console.log('5');
    this.name = null;
  }
  receiveToken() {
    firebase.messaging().requestPermission().then(function() {
      console.log('Notification permission granted.');

      firebase.messaging().getToken()
        .then(function(currentToken) {
          if (currentToken) {
            localStorage.setItem('fcmToken', currentToken);
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

