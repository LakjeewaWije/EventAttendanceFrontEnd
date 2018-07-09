import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {QrModule} from './qr/qr.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import firebase from 'firebase';
import {environment} from '../environments/environment';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
      BrowserModule,
    AppRoutingModule,
    QrModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
