// Third Party Imports
import { NgModule } from '@angular/core';
import {ActivatedRouteSnapshot, RouterModule, RouterStateSnapshot, Routes} from '@angular/router';
import { CommonModule } from '@angular/common';

// App Imports
import {EventComponent} from './event/event/event.component';
import {QrComponent} from './qr/qr/qr.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {AuthGuardService} from './qr/auth-guard.service';





const routes: Routes = [

  {
    path: 'gradChat',
    component: EventComponent,
    resolve: {
      url: 'externalUrlRedirectResolver'
    },
    data: {
      externalUrl: 'http://www.gradchat.com/'
    }
  },

  { path: '', redirectTo: '/gradChat', pathMatch: 'full' },
  { path: 'eventmain', component: NotFoundComponent },

  {
    path : 'qrscan/:eventId/:eventName',
    component : QrComponent,
    canActivate : [AuthGuardService]
  },

  // { path: 'qrscan/:eventId/:eventName', component: QrComponent },
  {path: '**', component: NotFoundComponent },

];

@NgModule({
  providers: [
    {
      provide: 'externalUrlRedirectResolver',
      useValue: (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) =>
      {
        window.location.href = (route.data as any).externalUrl;
      }
    },

  ],

  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule {}
