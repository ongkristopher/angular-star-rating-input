import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RatingInputComponent } from './rating-input.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent, RatingInputComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
