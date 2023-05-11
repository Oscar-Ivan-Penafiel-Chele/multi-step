import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddOnsRoutingModule } from './add-ons-routing.module';
import { AddOnsComponent } from './page/add-ons.component';


@NgModule({
  declarations: [
    AddOnsComponent
  ],
  imports: [
    CommonModule,
    AddOnsRoutingModule
  ]
})
export class AddOnsModule { }
