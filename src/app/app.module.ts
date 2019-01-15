import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ImageErrorComponent} from './image-error.component';
import {ImageFormComponent} from './image-form.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import {MaterialModule} from './material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent,
    ImageErrorComponent,
    ImageFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
