import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlanRoutingModule } from './plan-routing.module';
import { PlanComponent } from './page/plan.component';
import { FooterContentComponent } from 'src/app/shared/components/footer-content/page/footer-content.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PlanComponent
  ],
  imports: [
    CommonModule,
    PlanRoutingModule,
    FooterContentComponent,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PlanModule { }
