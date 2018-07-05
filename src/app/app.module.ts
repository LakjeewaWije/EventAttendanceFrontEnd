import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//App components
import { AppComponent } from './app.component';
import { QrViewComponent } from './qr/qr-view/qr-view.component';

//App modules
import { AppRoutingModule } from './app-routing.module';
import { QrModule } from './qr/qr.module';
import { NgxQRCodeModule } from 'ngx-qrcode2';
import { AngularFireModule } from 'angularfire2';
import { AngularFireStorageModule } from 'angularfire2/storage';


@NgModule({
  declarations: [
    AppComponent,
    QrViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    QrModule,
    NgxQRCodeModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyAWVvtr9WUb5xNPQjKMu12M-Fr_uy-EZJY",
      authDomain: "event-attendance-54b25.firebaseapp.com",
      databaseURL: "https://event-attendance-54b25.firebaseio.com",
      projectId: "event-attendance-54b25",
      storageBucket: "event-attendance-54b25.appspot.com",
      messagingSenderId: "86891543279"
    }),
    AngularFireStorageModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
