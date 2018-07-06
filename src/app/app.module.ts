import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// App components
import { AppComponent } from './app.component';
import { QrViewComponent } from './qr/qr-view/qr-view.component';

// App modules
import { AppRoutingModule } from './app-routing.module';
import { QrModule } from './qr/qr.module';
import { NgxQRCodeModule } from 'ngx-qrcode2';



@NgModule({
  declarations: [
    AppComponent,
    QrViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    QrModule,
    NgxQRCodeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
