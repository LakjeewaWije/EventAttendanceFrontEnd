// Third Party Imports
import { NgModule } from '@angular/core';
import {ActivatedRouteSnapshot, RouterModule, Routes} from '@angular/router';
import { CommonModule } from '@angular/common';

// App Imports
import {EventComponent} from './event/event/event.component';
import {QrComponent} from './qr/qr/qr.component';
import {NotFoundComponent} from './not-found/not-found.component';



const routes: Routes = [
  { path: '', redirectTo: '/eventmain', pathMatch: 'full' },
  { path: 'eventmain', component: EventComponent },
  { path: 'qrscan/:eventId/:eventName', component: QrComponent },
  {path: '**', component: NotFoundComponent },

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
