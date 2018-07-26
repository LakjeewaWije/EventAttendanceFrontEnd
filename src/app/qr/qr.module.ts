// Third Party Imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxQRCodeModule } from 'ngx-qrcode2';
import { RouterModule } from '@angular/router';

// App Imports
import {QrComponent} from './qr/qr.component';

@NgModule({
  imports: [
    CommonModule,
    NgxQRCodeModule,
    RouterModule
  ],
  declarations: [QrComponent]
})
export class QrModule { }
