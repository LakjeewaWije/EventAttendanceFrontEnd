import { Injectable } from '@angular/core';
import {HttpHeaders} from '@angular/common/http';
import {ConstantsService} from '../constants/constants.service';

export const constants = {

  headers : new HttpHeaders({
  'Content-Type': 'application/json; charset=utf-8',
  'Access-Control-Allow-Origin': '*'
})

};

@Injectable({
  providedIn: 'root'
})
export class ApiEndpointService {

  constructor(private baseUrl: ConstantsService) {

  }

  private urlEndPoints: any = {

    'baseUrl' : 'http://dev.api.gradchat.co/v2',
    'event' : '/event',
    'con' : '/con',
    'qr' : '/qr'
  };


  /*This is the method we pass whenever we need the url*/
  public urlGenerator(key): any {
    return `${this.baseUrl.getBaseUrl()}${this.urlEndPoints[key]}`;
  }
}
