import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {EventService} from '../event.service';
import { ActivatedRoute } from '@angular/router';
import * as firebase from 'firebase';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  constructor(private eventservice: EventService , private http: HttpClient, private route: ActivatedRoute) {
  }
   Name: string; // stores the event name
  events = []; // stores all event name returned by  getEvent method from event service
  fcmToken: string;
  /**
   * calling the create even method in event service
   * @constructor
   */
  createEvent() {
    console.log('1');
    this.eventservice.createEvent(this.Name);
    console.log('4');
     this.events = this.eventservice.events;
    console.log('5');
    this.Name = null;
  }
  ngOnInit(): void {
    console.log('1');
    this.events = this.eventservice.events;
    this.eventservice.getEvents();
    console.log('2');
    this.receiveToken();
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

