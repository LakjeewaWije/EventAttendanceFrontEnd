import { Component, OnInit} from '@angular/core';
import {QrService} from '../qr.service';
import {ActivatedRoute} from '@angular/router';
import { Component } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
@Component({
  selector: 'app-qr',
  templateUrl: './qr.component.html',
  styleUrls: ['./qr.component.css']
})
export class QrComponent implements OnInit {
  value;
  elem: any;
  qrPayload = {};
  heroes: Hero[];
  constructor(private qrservice: QrService, private route: ActivatedRoute , private http: HttpClient) {
    this.route.params.subscribe(params => {
      this.qrPayload.eventName = params['eventName'];
      this.qrPayload.eventId  = params['eventId'];
    });
  }




  ngOnInit(): void {
    this.elem = document.getElementById('myBar');
    this.elem.style.width = 50 + '%';
    this.setToken();
    this.elem.style.width = 75 + '%';
    this.qrPayload.UUID = this.qrservice.resposnearray[0];
    this.qrPayload.browserToken = this.qrservice.resposnearray[1];
    this.value = '{' + '\n'  + '"eventId": ' + '"' + this.qrPayload.eventId + '"' + ',' + '\n' + '"eventName": ' + '"' +  this.qrPayload.eventName + '"' + ',' + '\n' + '"UUID": '   + '"' +
      this.qrPayload.UUID + '"' + ',' + '\n' + '"browserToken": ' + '"' + this.qrPayload.browserToken + '"' + '\n' + '}' ;
    this.elem.style.width = 100 + '%';
  }
  setToken(): any {
    this.qrservice.setToken().subscribe(hero => {
      this.heroes = hero;
    });
  }
}
