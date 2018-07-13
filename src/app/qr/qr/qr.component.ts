import { Component, OnInit } from '@angular/core';
import {QrService} from '../qr.service';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-qr',
  templateUrl: './qr.component.html',
  styleUrls: ['./qr.component.css']
})
export class QrComponent implements OnInit {
  eventname: string;
  eventid: string;
  value;
  constructor() {}
  constructor(private qrservice: QrService, private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      // console.log(params);
      this.eventname = params['eventName'];
      this.eventid = params['eventId'];
      this.qrservice.getparamiteredurlk(this.eventname, this.eventid);
      // console.log('Event Id' + this.eventid);
      // console.log('Event Name' + this.eventname);
    });
  }
  setToken() {
    this.qrservice.setToken();
  }
  ngOnInit(): void {
    this.setToken();
  }

}
