import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {EventService} from '../event.service';
import {Router} from '@angular/router';
import { ActivatedRoute } from '@angular/router';
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
  }


}

