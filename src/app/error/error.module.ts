import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NotFoundComponent} from './404/404.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NotFoundComponent]
})
export class ErrorModule { }
