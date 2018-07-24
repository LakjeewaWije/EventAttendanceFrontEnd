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

  /**
   * catch the returned response from event service to the create event request and behaves accordingly for the success and error
   */
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

  /**
   * Gets the FCM token by calling the method in event service
   */
  receiveFcmToken() {
    this.eventService.getFcmToken();
  }

  /**
   * behaves to the successful response from getEvents request
   * @param res
   */
  getEventsOnresponseSuccess(res: any): void {
    this.events = res.data;
    console.log(res.data);
  }

  /**
   * behaves to error response from getEvent request
   * @param {string} error
   */
  getEventsOnresponseError(error: string): void {
    console.log(error);
  }

  /**
   * behaves to the successful response from createEvent request
   * @param res
   */
  createEventOnresponseSuccess(res: any): void {
    this.events.length = 0;
    this.events = res.data;
    console.log(res.data);
  }

  /**
   * behaves to error response from createEvent request
   * @param {string} error
   */
  createEventOnresponseError(error: string): void {
    console.log(error);
  }
}

