import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QrRouteService implements CanActivate {

  /*Navigates to the QR view if the fcm token is available in the local storage*/
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    if (localStorage.getItem('fcmToken')) {
      return true;
    } else {
      alert('FCM Token is missing');
      return false;
    }
  }
  constructor() { }
}
