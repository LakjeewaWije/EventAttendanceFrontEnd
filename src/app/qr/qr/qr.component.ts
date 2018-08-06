// Third Party Imports
import { Component, OnInit} from '@angular/core';

// App imports
import {QrService} from '../qr.service';
import {ActivatedRoute} from '@angular/router';
import {ConstantsService} from '../../utils/constants/constants.service';

@Component({
  selector: 'app-qr',
  templateUrl: './qr.component.html',
  styleUrls: ['./qr.component.css']
})

export class QrComponent implements OnInit {
  value;
  qrPayload: any = {};
  fcmToken = 'default';
  eventName: any;
  showSpinner;
  showLogo;
  showBorder;

  constructor(private qrService: QrService, private route: ActivatedRoute, private qrStrings: ConstantsService) {
    this.route.params.subscribe(params => {
      this.qrPayload.eventName = params['eventName'];
      this.qrPayload.eventId = params['eventId'];
      this.eventName = params['eventName'];
    });
  }

  ngOnInit(): void {
    this.generateQR();
    // document.getElementById('kliqlogo').style.display = 'block';
    this.qrService.reloadPage();
  }

  qrTemplateStrings() {
    return this.qrStrings.getQrStrings();
  }


  /**
   * catch the returned response from qr service and behaves accordingly for the success and error
   */
  generateQR() {
    this.qrService.generateQR(localStorage.getItem('fcmToken')).subscribe(
      res => {
        setTimeout(() => {
          this.showSpinner = false;
          this.showLogo = true;
          this.showBorder = true;

          this.generateQROnresponseSuccess(res);
        }, 500);

        this.showSpinner = true;
        this.showLogo = false;

      },
      err => {
        this.generateQROnresponseError(err);
      }
    );
  }

  /**
   * behaves to the successful response from generateQR request
   * @param res
   */
  generateQROnresponseSuccess(res: any): void {
    this.qrPayload.UUID = res.data.uuid;
    this.qrPayload.browserToken = res.data.browserToken;
    this.value = '{' + '\n' + '"eventId": ' + '"' + this.qrPayload.eventId + '"' + ',' + '\n' + '"eventName": ' + '"' + this.qrPayload.eventName + '"' + ',' + '\n' + '"uuid": ' + '"' +
      this.qrPayload.UUID + '"' + ',' + '\n' + '"browserToken": ' + '"' + this.qrPayload.browserToken + '"' + '\n' + '}';
  }
  /**
   * behaves to error response from generateQR request
   * @param {string} error
   */
  generateQROnresponseError(error: string): void {
    console.log(error);
  }
}
