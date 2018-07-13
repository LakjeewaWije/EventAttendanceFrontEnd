import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {QrComponent} from './qr/qr.component';
import { NgxQRCodeModule } from 'ngx-qrcode2';
@NgModule({
  imports: [
    CommonModule,
    NgxQRCodeModule,
  ],
  declarations: [QrComponent]
})
export class QrModule { }
