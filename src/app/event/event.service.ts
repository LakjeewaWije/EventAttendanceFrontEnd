import { Injectable } from '@angular/core';
import {Event} from './event';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/index';
@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http: HttpClient) { }
  Eventnames: string[] = []; // array to  store event  names

  event =  new Event(); // instantiating the event class
  /**
   * method to create an event and save that event to event names array
   * @param {string} eventname
   */
  createEvent(eventname: string) {
    this.event.setEName(eventname);

    const headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8', 'Access-Control-Allow-Origin' : '*'});
    const req = this.http.post('http://localhost:9000/event',  {
      eventName: this.event.getEName(),
      eventDesc: 'lakiyaaaa event ',
      eventDateTime: this.event.getEDateTime()
    }, {headers : headers}).subscribe(res => {console.log(res); },
        err => {
          console.log('Error occured');
        }
      );
  }

  getEvents() {
    const headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8', 'Access-Control-Allow-Origin' : '*'});
    this.http.get('http://localhost:9000/con', {headers : headers}).subscribe(
      data => {
        console.log(data);
      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          console.log('Client-side error occured.');
        } else {
          console.log('Server-side error occured.');
        }
      }
    );
    // this.Eventnames.push(this.event.getEName());
  }
}
