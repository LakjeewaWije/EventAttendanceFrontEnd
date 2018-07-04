import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {EventModule} from './event/event.module';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import {EventComponent} from './event/event/event.component';
import {HttpClientModule} from '@angular/common/http';
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
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
