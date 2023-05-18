import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonalInfoRoutingModule } from './personal-info-routing.module';
import { PersonalInfoComponent } from './page/personal-info.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterContentComponent } from 'src/app/shared/components/footer-content/page/footer-content.component';
import { InputFieldComponent } from 'src/app/shared/components/input-field/page/input-field.component';

@NgModule({
  declarations: [
    PersonalInfoComponent
  ],
  imports: [
    CommonModule,
    PersonalInfoRoutingModule,
    InputFieldComponent,
    FooterContentComponent,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PersonalInfoModule { }
