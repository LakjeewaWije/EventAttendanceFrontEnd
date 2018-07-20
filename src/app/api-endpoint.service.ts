import { Injectable } from '@angular/core';
import {HttpHeaders} from '@angular/common/http';

export const constants = {
  baseUrl : 'http://192.168.8.104:9000/',

  headers : new HttpHeaders({
  'Content-Type': 'application/json; charset=utf-8',
  'Access-Control-Allow-Origin': '*'
})

};



@Injectable({
  providedIn: 'root'
})
export class ApiEndpointService {

  constructor() { }
}
