import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MentionModule } from 'angular-mentions';

import { AppComponent } from './app.component';
// import { MentionModule } from 'angular-mentions';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MentionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
