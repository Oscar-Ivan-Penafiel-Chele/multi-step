import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddOnsRoutingModule } from './add-ons-routing.module';
import { AddOnsComponent } from './page/add-ons.component';
import { FooterContentComponent } from 'src/app/shared/components/footer-content/page/footer-content.component';
import { AddComponent } from './components/add/page/add.component';
import { CheckboxComponent } from 'src/app/shared/components/checkbox/page/checkbox.component';

@NgModule({
  declarations: [
    AddOnsComponent,
    AddComponent
  ],
  imports: [
    CommonModule,
    AddOnsRoutingModule,
    FooterContentComponent,
    CheckboxComponent
  ]
})
export class AddOnsModule { }
