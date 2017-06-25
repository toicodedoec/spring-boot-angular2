import { HttpModule } from '@angular/http';
import { DummyService } from './service/dummy.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, HttpModule
  ],
  providers: [
    DummyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
