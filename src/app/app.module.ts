import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BlackComponent } from './black/black.component';
import { WhiteComponent } from './white/white.component';

@NgModule({
  declarations: [
    AppComponent,
    BlackComponent,
    WhiteComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
