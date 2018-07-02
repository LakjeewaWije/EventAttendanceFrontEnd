import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  Name: string;
  tasks = [];
  onClick() {
    this.tasks.push({name: this.Name});
    this.Name = '';
  }
  constructor() { }

  ngOnInit() {
  }

}
