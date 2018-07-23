// Third Party Imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

// App Imports
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { environment } from '../environments/environment';
import { EventModule } from './event/event.module';
import { EventComponent } from './event/event/event.component';
import * as firebase from 'firebase';
import { QrModule } from './qr/qr.module';
import { NotFoundComponent } from './not-found/not-found.component';
import {AuthGuardService} from './qr/auth-guard.service';



firebase.initializeApp(environment.config);

@NgModule({
  declarations: [
    AppComponent,
    EventComponent,
    NotFoundComponent
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
  providers: [AuthGuardService],
  bootstrap: [AppComponent]
})

export class AppModule {
}
