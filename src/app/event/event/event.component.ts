import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {EventService} from '../event.service';
@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  constructor(private eventservice: EventService , private http: HttpClient) { }
   Name: string; // stores the event name
  events = []; // stores all event name returned by  getEvent method from event service
  /**
   * calling the create even method in event service
   * @constructor
   */
  createEvent() {
     this.eventservice.getEvents();
    this.eventservice.createEvent(this.Name);
     this.events = this.eventservice.events;
  }
  ngOnInit(): void {
    this.events = this.eventservice.events;
    this.eventservice.getEvents();
  }


}

