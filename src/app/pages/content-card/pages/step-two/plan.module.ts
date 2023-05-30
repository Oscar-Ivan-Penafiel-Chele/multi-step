import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlanRoutingModule } from './plan-routing.module';
import { PlanComponent } from './page/plan.component';
import { FooterContentComponent } from 'src/app/shared/components/footer-content/page/footer-content.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PlanCardComponent } from './components/plan-card/page/plan-card.component';
import { SwitchPlanComponent } from './components/switch-plan/page/switch-plan.component';


@NgModule({
  declarations: [
    PlanComponent,
    PlanCardComponent,
    SwitchPlanComponent
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
