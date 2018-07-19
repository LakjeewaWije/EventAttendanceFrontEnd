// Third Party Imports
import { Injectable } from '@angular/core';
import {HttpHeaders} from '@angular/common/http';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import * as firebase from 'firebase';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class QrService {
  browserToken: string;
  constructor(private http: HttpClient, private route: ActivatedRoute) {
  }
  // Retrieve Firebase Messaging object.
   messaging = firebase.messaging();
  setToken(token: string): Observable<any> {
     // this.messaging.usePublicVapidKey('BMsj59O8bkUhnr3OZmxkLx1gN-R78-BZ_TtLuPTHBLRJPD3Ed-zPrkfoRrsQ0sWpIVv2OxD04s2_PQZ7LPdKdok');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8',
      'Access-Control-Allow-Origin': '*'
    });
    return this.http.post<any>('http://192.168.8.104:9000/qr', {
      browserToken: token,
    }, {headers: headers}).pipe(
      tap((data: string) => {}),
      // catchError(this.handleError<Hero>('addHero'))
    );
  }
}
