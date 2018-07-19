// Third Party Imports
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

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
    this.receiveFcmToken();
  }

  createEvent() {
    console.log('1');
    this.eventService.createEvent(this.name);
    console.log('4');
    this.events = this.eventService.events;
    console.log('5');
    this.name = null;
  }
  receiveFcmToken() {
    this.eventService.getFcmToken();
  }
}

