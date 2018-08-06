import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';


const qrTemplateStrings: any = {
  'checkInMessage' : 'Participants, Please Check-in To The Event Here',
  'stepOne' : '1. Open kliq App on your phone',
  'stepTwo' : '2. Tap Menu',
  'stepThree' : '3. Choose the event on the Screen',
  'stepFour' : '4. Tap to open the QR code on Event',
  'stepFive' : '5. Point your phone to the screen to capture the code',
  'needHelp' : 'Need help to get started?',
  'overlayMessage' : 'Cannot display Console on this screen size',
  'getQr' : 'Get QR code'
};

export const constants = {
  baseUrl : environment.baseUrl,
  stringConstants : qrTemplateStrings
};


@Injectable({
  providedIn: 'root'
})


export class ConstantsService {

  constructor() {

  }

  /*Returns all the strings in the QR template*/
  getQrStrings() {
    return qrTemplateStrings;
  }

  /*Returns the base url from the dev environment*/
  getBaseUrl() {
    return constants.baseUrl;
  }
}
