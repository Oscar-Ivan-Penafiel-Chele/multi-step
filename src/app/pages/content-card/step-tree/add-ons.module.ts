import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddOnsRoutingModule } from './add-ons-routing.module';
import { AddOnsComponent } from './page/add-ons.component';
import { FooterContentComponent } from 'src/app/shared/components/footer-content/page/footer-content.component';


@NgModule({
  declarations: [
    AddOnsComponent
  ],
  imports: [
    CommonModule,
    AddOnsRoutingModule,
    FooterContentComponent
  ]
})
export class AddOnsModule { }
