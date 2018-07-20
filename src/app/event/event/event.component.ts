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
  events: object[] = []; // stores all event name returned by  getEvent method from event service
  fcmToken: string;

  constructor(private eventService: EventService) {
  }

  /**
   * calling the create even method in event service
   */
  ngOnInit(): void {
    this.events = this.eventService.events;
    this.eventService.getEvents().subscribe(
      res => {
        this.getEventsOnresponseSuccess(res);
      },
      err => {
        this.getEventsOnresponseError(err);

      }
    );
    this.receiveFcmToken();
  }

  createEvent() {
    this.eventService.createEvent(this.name).subscribe(
      res => {
        this.createEventOnresponseSuccess(res);
      },
      err => {
        this.createEventOnresponseError(err);

      }
    );
    this.events = this.eventService.events;
    this.name = null;
  }
  receiveFcmToken() {
    this.eventService.getFcmToken();
  }


  getEventsOnresponseSuccess(res: any): void {
    this.events = res.data;
    console.log(res.data);
  }
  getEventsOnresponseError(error: string): void {
    console.log(error);
  }
  createEventOnresponseSuccess(res: any): void {
    this.events.length = 0;
    this.events = res.data;
    console.log(res.data);
  }
  createEventOnresponseError(error: string): void {
    console.log(error);
  }
}

