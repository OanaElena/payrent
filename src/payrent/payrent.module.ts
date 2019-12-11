import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MainNavComponent } from './main/main-nav/main-nav.component';
import { HomeComponent } from './home/home.component';
import {MainComponent} from "./main/main-component/main.component";
import {AppRoutingModule} from "./app-routing.module";
import {MaterialModule} from "./material.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { AutentificationComponent } from './autentification/autentification.component';

@NgModule({
  declarations: [
  MainComponent,
  MainNavComponent,
  HomeComponent,
  AutentificationComponent],
  imports: [
    BrowserModule,
    MaterialModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class PayrentModule { }
