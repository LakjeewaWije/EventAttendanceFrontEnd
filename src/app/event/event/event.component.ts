import { Component, OnInit } from '@angular/core';
import {Event} from '../event';
import {EventService} from '../event.service';
@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  constructor(private eventservice: EventService) { }
   Name: string; // stores the event name
  Eventnames = []; // stores all event name returned by  getEvent method from event service
  /**
   * calling the create even method in event service
   * @constructor
   */
  createEvent() {
    this.eventservice.createEvent(this.Name);
    this.Eventnames = this.eventservice.getEvents();
  }
  ngOnInit() {
  }

}

