import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {EventComponent} from './event/event/event.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  { path: '', redirectTo: '/eventmain', pathMatch: 'full' },
  { path: 'eventmain', component: EventComponent },

import {QrComponent} from './qr/qr/qr.component';

const routes: Routes = [
  { path: '', redirectTo: '/qrscan', pathMatch: 'full' },
  { path: 'qrscan', component: QrComponent },

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
