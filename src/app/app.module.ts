import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewContactComponent } from './view-contact/view-contact.component';
import { HttpClientModule } from "@angular/common/http";

const addRoute : Routes = [
  {
    path:"", component:ViewContactComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    ViewContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(addRoute),
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
