import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {EventModule} from './event/event.module';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import {EventComponent} from './event/event/event.component';


@NgModule({
  declarations: [
    AppComponent,
    EventComponent
  ],
  imports: [
    BrowserModule,
    EventModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
