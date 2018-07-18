import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { QrModule } from './qr/qr.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { EventModule } from './event/event.module';
import { FormsModule } from '@angular/forms';
import { EventComponent } from './event/event/event.component';
import * as firebase from 'firebase';

firebase.initializeApp(environment.config);

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
    QrModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
}
