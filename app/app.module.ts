import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import appRoutes from "./app.routes";
import {HomeComponent} from "./home/home.component";
// import {RouterModule} from "@angular/router";

@NgModule({
  imports:      [ BrowserModule, appRoutes],
  declarations: [ AppComponent, HomeComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
