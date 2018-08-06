import { Injectable } from '@angular/core';
import {HttpHeaders} from '@angular/common/http';
import { environment } from '../../../environments/environment';
export const constants = {

  headers : new HttpHeaders({
  'Content-Type': 'application/json; charset=utf-8',
})

};

@Injectable({
  providedIn: 'root'
})
export class ApiEndpointService {
  baseUrl = environment.baseUrl;
  constructor() {

  }

  private urlEndPoints: any = {

    'baseUrl' : this.baseUrl,
    'event' : '/event',
    'con' : '/con',
    'qr' : '/qr'
  };

  public urlGenerator(key): any {
    return `${this.urlEndPoints['baseUrl']}${this.urlEndPoints[key]}`;
  }
}
