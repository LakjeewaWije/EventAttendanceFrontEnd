import { Injectable } from '@angular/core';
import { FirebaseAuth} from 'angularfire2';
import {FirebaseMessaging} from 'angularfire2';
@Injectable({
  providedIn: 'root'
})
export class QrService {
  constructor(private fireauth: FirebaseAuth, private fbsemsg: FirebaseMessaging) { }
  getUtoken(): void {
    // let message = this.fbsemsg.usePublicVapidKey('AIzaSyBwNA6TeFfLPsz2H6Xo4diVIvFOqPqIqwM');
  this.fireauth.currentUser.getIdTokenResult();
  }
}
