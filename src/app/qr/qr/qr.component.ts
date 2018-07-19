// Third Party Imports
import { Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import * as firebase from 'firebase';

// App Imports
import {QrService} from '../qr.service';

@Component({
  selector: 'app-qr',
  templateUrl: './qr.component.html',
  styleUrls: ['./qr.component.css']
})

export class QrComponent implements OnInit {
  value;
  qrPayload: any = {};
  fcmToken = 'default';

  constructor(private qrservice: QrService, private route: ActivatedRoute , private http: HttpClient) {
    this.route.params.subscribe(params => {
      this.qrPayload.eventName = params['eventName'];
      this.qrPayload.eventId  = params['eventId'];
    });
  }

  ngOnInit(): void {
    this.setToken();
    this.reloadPage();
  }

  setToken() {
    this.qrservice.setToken(localStorage.getItem('fcmToken')).subscribe(data => {
      console.log(data.data);
      this.qrPayload.UUID = data.data.uuid;
      this.qrPayload.browserToken = data.data.browserToken;
      console.log(this.qrPayload.UUID);
      console.log(this.qrPayload.browserToken);

      // tslint:disable-next-line:max-line-length
      this.value = '{' + '\n'  + '"eventId": ' + '"' + this.qrPayload.eventId + '"' + ',' + '\n' + '"eventName": ' + '"' +  this.qrPayload.eventName + '"' + ',' + '\n' + '"UUID": '   + '"' +
        this.qrPayload.UUID + '"' + ',' + '\n' + '"browserToken": ' + '"' + this.qrPayload.browserToken + '"' + '\n' + '}' ;

    });
  }

  reloadPage() {
    firebase.messaging().requestPermission().then(function() {
      console.log('Notification permission granted.');
    }).catch(function(err) {
      console.log('Unable to get permission to notify.', err);
    });
    firebase.messaging().onMessage(function(payload) {
      console.log('On message: ', payload);
      location.reload();
    });
  }
}
