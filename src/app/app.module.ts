import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {QrModule} from './qr/qr.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {environment} from '../environments/environment';
import {ServiceWorkerModule} from '@angular/service-worker';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
      BrowserModule,
    AppRoutingModule,
    QrModule,
    HttpClientModule,
    ServiceWorkerModule.register('/combined-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
}
