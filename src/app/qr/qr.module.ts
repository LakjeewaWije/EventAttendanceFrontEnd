// Third Party Imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxQRCodeModule } from 'ngx-qrcode2';

// App Imports
import {QrComponent} from './qr/qr.component';

@NgModule({
  imports: [
    CommonModule,
    NgxQRCodeModule,
  ],
  declarations: [QrComponent]
})
export class QrModule { }
