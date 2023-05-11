import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SummaryRoutingModule } from './summary-routing.module';
import { SummaryComponent } from './page/summary.component';
import { FinalizationComponent } from './subviews/finalization/page/finalization.component';

@NgModule({
  declarations: [
    SummaryComponent,
    FinalizationComponent
  ],
  imports: [
    CommonModule,
    SummaryRoutingModule
  ]
})
export class SummaryModule { }
