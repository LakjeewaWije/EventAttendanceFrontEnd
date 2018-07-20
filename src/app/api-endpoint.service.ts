import { Injectable } from '@angular/core';
import {HttpHeaders} from '@angular/common/http';

export const baseUrl = 'http://localhost/9000/';

export const headers = new HttpHeaders({
  'Content-Type': 'application/json; charset=utf-8',
  'Access-Control-Allow-Origin': '*'
});


@Injectable({
  providedIn: 'root'
})
export class ApiEndpointService {

  constructor() { }
}
