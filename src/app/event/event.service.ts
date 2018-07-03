import { Injectable } from '@angular/core';
import {Event} from './event';
import {Observable} from 'rxjs/index';
@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor() { }

  event =  new Event(); // instantiating the event class
  /**
   * method to create an event and save that event to event names array
   * @param {string} eventname
   */
  createEvent(eventname: string) {
    this.event.EName1 = eventname;
    this.event.EName1 = '';
    this.event.Eventnames.push(eventname);
  }

  /**
   * method which returns the event names array
   * @returns {string[]}
   */
  getEvents() {
    return this.event.Eventnames;
  }
}
