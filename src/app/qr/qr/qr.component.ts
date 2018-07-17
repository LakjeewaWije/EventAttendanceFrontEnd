import { Component, OnInit} from '@angular/core';
import {QrService} from '../qr.service';
import {ActivatedRoute} from '@angular/router';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { MessagingService } from './messasing.service';
@Component({
  selector: 'app-qr',
  templateUrl: './qr.component.html',
  styleUrls: ['./qr.component.css']
})
export class QrComponent implements OnInit {
  value;
  qrPayload = {};
  fcmToken: string;

  constructor(private qrservice: QrService, private route: ActivatedRoute , private http: HttpClient) {
    this.route.params.subscribe(params => {
      this.qrPayload.eventName = params['eventName'];
      this.qrPayload.eventId  = params['eventId'];
    });
  }




  ngOnInit(): void {
    // this.elem = document.getElementById('myBar');
    // this.elem.style.width = 50 + '%';
    console.log(this.recieveToken() + 'qwqwqwqwqwqwqwqwqwqwqwqw');
    // this.recieveToken();
    this.setToken();

  }
  setToken() {
    this.qrservice.setToken('dffdfddffdfdfdfff' + this.fcmToken).subscribe(data => {
      console.log(data.data);
      this.qrPayload.UUID = data.data.uuid;
      this.qrPayload.browserToken = data.data.browserToken;
      console.log(this.qrPayload.UUID);
      console.log(this.qrPayload.browserToken);
      this.value = '{' + '\n'  + '"eventId": ' + '"' + this.qrPayload.eventId + '"' + ',' + '\n' + '"eventName": ' + '"' +  this.qrPayload.eventName + '"' + ',' + '\n' + '"UUID": '   + '"' +
        this.qrPayload.UUID + '"' + ',' + '\n' + '"browserToken": ' + '"' + this.qrPayload.browserToken + '"' + '\n' + '}' ;
    });
  }


  recieveToken() {
    firebase.messaging().requestPermission()
      .then(() => {
        console.log('Notification permission granted.');
        return firebase.messaging().getToken();
      })
      .then(function(token) {
        return token;
      })
      .catch((err) => {
        console.log('Unable to get permission to notify.', err);
      });

    firebase.messaging().onMessage(function(payload) {
      console.log('On message: ', payload);
    });
  }
}
