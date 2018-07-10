import { Component, OnInit } from '@angular/core';
import {QrService} from '../qr.service';
@Component({
  selector: 'app-qr',
  templateUrl: './qr.component.html',
  styleUrls: ['./qr.component.css']
})
export class QrComponent implements OnInit {
  constructor(private qrservice: QrService) {
  }
  value;
  createQr() {
    this.value = '{' + '\n'  + '"eventId": ' + '"' + localStorage.getItem('eventId') + '"' + '\n' + '"eventName": ' + '"' +  localStorage.getItem('eventName') + '"' + '\n' + '"UUID": '   + '"' +
      this.qrservice.resposnearray[0] + '"' + '\n' + '"browserToken": ' + '"' + this.qrservice.resposnearray[1] + '"' + '\n' + '}' ;
  }
  ngOnInit() {
    localStorage.setItem('eventId', 'e1');
    localStorage.setItem('eventName', 'GoogleIO');
    this.qrservice.getTokenGG();
  }

}
