import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AsideCardComponent } from './pages/aside-card/aside-card.component';
import {BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ItemMenuCardComponent } from './pages/aside-card/components/item-menu-card/item-menu-card.component'; 

@NgModule({
  declarations: [
    AppComponent,
    AsideCardComponent,
    ItemMenuCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
