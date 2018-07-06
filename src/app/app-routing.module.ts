import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {QrComponent} from './qr/qr/qr.component';

const routes: Routes = [
  { path: '', redirectTo: '/qrscan', pathMatch: 'full' },
  { path: 'qrscan', component: QrComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
