import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {QrModule} from './qr/qr.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {environment} from '../environments/environment';
import {ServiceWorkerModule} from '@angular/service-worker';
import {HttpClientModule} from '@angular/common/http';
import {EventModule} from './event/event.module';
import {FormsModule} from '@angular/forms';
import {EventComponent} from './event/event/event.component';

// import {DateFormatter} from "@angular/common/src/pipes/deprecated/intl"
// import {DatePickerModule} from 'ng2-datepicker';
// angular.module('timezoneSelectExample', ['angular-timezone-selector']);
@NgModule({
  declarations: [
    AppComponent,
    EventComponent
  ],
  imports: [
    BrowserModule,
    EventModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserModule,
    QrModule,
    ServiceWorkerModule.register('/combined-worker.js', { enabled: environment.production })

  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
}
