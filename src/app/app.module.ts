import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ImageErrorComponent} from './image-error.component';
import {ImageFormComponent} from './image-form.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import {MaterialModule} from './material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {ShowImageComponent} from './show-image.component';
import {RouterImage} from './app.routes.module';
import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent,
    ImageErrorComponent,
    ImageFormComponent,
    ShowImageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterImage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
