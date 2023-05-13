import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonalInfoRoutingModule } from './personal-info-routing.module';
import { PersonalInfoComponent } from './page/personal-info.component';
import { InputFieldComponent } from './components/input-field/input-field.component';

@NgModule({
  declarations: [
    PersonalInfoComponent
  ],
  imports: [
    CommonModule,
    PersonalInfoRoutingModule,
    InputFieldComponent
  ]
})
export class PersonalInfoModule { }
