import { Injectable } from '@angular/core';
import {Event} from './event';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/index';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http: HttpClient) {
  }
   event = new Event(); // instantiating the event class
    events = [];

  /**
   * method to create an event and save that event to event names array
   * @param {string} eventname
   */
  createEvent(eventname: string) {
    this.event.setEName(eventname);

    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8',
      'Access-Control-Allow-Origin': '*'
    });
    const req = this.http.post<any>('http://192.168.8.103:9000/event', {
      eventName: this.event.getEName(),
      eventDesc: 'lakiyaaaa event ',
      eventDateTime: this.event.getEDateTime()
    }, {headers: headers}).subscribe(res => {
        const eventsFromResponse = res.data;
        console.log(eventsFromResponse);
        this.events.length = 0;
        for (let i = 0; i < eventsFromResponse.length; i++) {
          this.events.push(eventsFromResponse[i]);
        }
        console.log(this.events);
      },
      err => {
        console.log('Error occured');
      }
    );
  }

  getEvents() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8',
      'Access-Control-Allow-Origin': '*'
    });
    this.http.get<any>('http://192.168.8.103:9000/con', {headers: headers}).subscribe(
      data => {
        const eventsFromResponse = data.data;
        // console.log(eventsFromResponse);
        this.events.length = 0;
        for (let i = 0; i < eventsFromResponse.length; i++) {
          this.events.push(eventsFromResponse[i]);
        }
        // console.log(this.events);
      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          console.log('Client-side error occured.');
        } else {
          console.log('Server-side error occured.');
        }
      }
    );
  }
}


