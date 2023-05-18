import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AsideCardComponent } from './pages/aside-card/aside-card.component';
import { ItemMenuCardComponent } from './pages/aside-card/components/item-menu-card/item-menu-card.component';
import { FooterContentComponent } from './shared/components/footer-content/page/footer-content.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AsideCardComponent,
    ItemMenuCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FooterContentComponent,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
