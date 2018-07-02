import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {EventComponent} from './event/event/event.component';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {EventModule} from './event/event.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    EventModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
