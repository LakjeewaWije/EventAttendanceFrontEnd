// Third Party Imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgxQRCodeModule } from 'ngx-qrcode2';

// App Imports
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { environment } from '../environments/environment';
import { EventModule } from './event/event.module';
import { EventComponent } from './event/event/event.component';
import * as firebase from 'firebase';
import { QrModule } from './qr/qr.module';
import { NotFoundComponent } from './error/404/404.component';
import {QrRouteService} from './qr/route-guard';
import { AndroidQrComponent } from './android-qr/android-qr.component';
import { RouterModule } from '@angular/router';
import { IosQrComponent } from './ios-qr/ios-qr.component';



firebase.initializeApp(environment.config);

@NgModule({
  declarations: [
    AppComponent,
    EventComponent,
    NotFoundComponent,
    AndroidQrComponent,
    IosQrComponent
  ],
  imports: [
    BrowserModule,
    EventModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserModule,
    QrModule,
    NgxQRCodeModule,
    RouterModule
  ],
  providers: [QrRouteService],
  bootstrap: [AppComponent]
})

export class AppModule {
}
