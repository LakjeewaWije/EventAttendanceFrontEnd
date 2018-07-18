import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {QrComponent} from './qr/qr/qr.component';
import {EventComponent} from './event/event/event.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  { path: '', redirectTo: '/eventmain', pathMatch: 'full' },
  { path: 'eventmain', component: EventComponent },
  { path: 'qrscan/:eventId/:eventName', component: QrComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule {}
