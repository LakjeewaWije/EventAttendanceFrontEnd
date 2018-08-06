// Third Party Imports
import { Component, OnInit } from '@angular/core';

// App imports
import { QrService } from '../qr.service';
import { ActivatedRoute } from '@angular/router';
import { QuickResponseModel } from './qr-model';
@Component({
  selector: 'app-qr',
  templateUrl: './qr.component.html',
  styleUrls: ['./qr.component.css']
})

export class QrComponent implements OnInit {
  value;
  // qrPayload: any = {};
  fcmToken = 'default';
  private qrpayload: QuickResponseModel = new QuickResponseModel();
  eventName: any;
  showSpinner = true;
  showLogo;
  showBorder;


  constructor(private qrService: QrService, private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.qrpayload.$eventName = decodeURIComponent(params['eventName']);
      this.qrpayload.$eventId = params['eventId'];
      // console.log(this.qrpayload.$eventId);
      // console.log(params['eventId']);
      this.eventName = decodeURIComponent(params['eventName']);
    });
  }

  ngOnInit(): void {
    this.generateQR();
    // document.getElementById('kliqlogo').style.display = 'block';
    this.qrService.reloadPage();
  }


  /**
   * catch the returned response from qr service and behaves accordingly for the success and error
   */
  generateQR() {
    this.qrService.generateQR(localStorage.getItem('fcmToken'), this.qrpayload.$eventId, this.generateQROnresponseSuccess.bind(this),
      this.generateQROnresponseError.bind(this));
  }

  /**
   * behaves to the successful response from generateQR request
   * @param res
   */
  generateQROnresponseSuccess(res: any): void {
    setTimeout(() => {
      this.showSpinner = false;
      this.showLogo = true;
      this.showBorder = true;
    }, 500);

    this.qrpayload.$uuid = res.data.uuid;
    this.qrpayload.$browserToken = res.data.browserToken;
    this.value = JSON.stringify(this.qrpayload);
    // this.value = '{' + '\n' + '"eventId": ' + '"' + this.qrpayload.eventId + '"' + ',' + '\n' + '"eventName": ' + '"' + this.qrPayload.eventName + '"' + ',' + '\n' + '"uuid": ' + '"' +
    //   this.qrPayload.UUID + '"' + ',' + '\n' + '"browserToken": ' + '"' + this.qrPayload.browserToken + '"' + '\n' + '}';
  }
  /**
   * behaves to error response from generateQR request
   * @param {string} error
   */
  generateQROnresponseError(error: string): void {
    this.generateQROnresponseError(error);
    console.log(error);
  }
}
