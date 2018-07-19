import { Component, OnInit} from '@angular/core';

import {QrService} from '../qr.service';
import {ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import * as firebase from 'firebase';


@Component({
  selector: 'app-qr',
  templateUrl: './qr.component.html',
  styleUrls: ['./qr.component.css']
})

export class QrComponent implements OnInit {
  value;
  qrPayload: any = {};
  fcmToken = 'default';

  constructor(private qrService: QrService, private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.qrPayload.eventName = params['eventName'];
      this.qrPayload.eventId = params['eventId'];
    });
  }

  ngOnInit(): void {
    this.setToken();
    this.qrService.reloadPage();
  }

  setToken() {
    this.qrService.sendToken(localStorage.getItem('fcmToken')).subscribe(data => {
      console.log(data.data);
      this.qrPayload.UUID = data.data.uuid;
      this.qrPayload.browserToken = data.data.browserToken;
      console.log(this.qrPayload.UUID);
      console.log(this.qrPayload.browserToken);

      // tslint:disable-next-line:max-line-length
      this.value = '{' + '\n' + '"eventId": ' + '"' + this.qrPayload.eventId + '"' + ',' + '\n' + '"eventName": ' + '"' + this.qrPayload.eventName + '"' + ',' + '\n' + '"UUID": ' + '"' +
        this.qrPayload.UUID + '"' + ',' + '\n' + '"browserToken": ' + '"' + this.qrPayload.browserToken + '"' + '\n' + '}';
    });
  }
}

