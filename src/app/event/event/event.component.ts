import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  Name: string;
  Eventnames = [];
  CreateEvent() {
    this.Eventnames.push({name: this.Name});
    this.Name = '';
  }
  constructor() { }

  ngOnInit() {
  }

}
