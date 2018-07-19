// Third Party Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';

// App Components
import { EventComponent } from './event/event.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [],
  bootstrap: [EventComponent]
})
export class EventModule { }
