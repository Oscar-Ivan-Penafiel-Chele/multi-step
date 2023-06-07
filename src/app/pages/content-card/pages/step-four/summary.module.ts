import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SummaryRoutingModule } from './summary-routing.module';
import { SummaryComponent } from './page/summary.component';
import { FinalizationComponent } from './subviews/finalization/page/finalization.component';
import { FooterContentComponent } from 'src/app/shared/components/footer-content/page/footer-content.component';
import { FinishFooterTotalComponent } from './components/finish-footer-total/page/finish-footer-total.component';
import { FinishCardComponent } from './components/finish-card/page/finish-card.component';
import { AddonsItemsComponent } from './components/finish-card/components/addons-items/page/addons-items.component';
import { HeaderCardComponent } from './components/finish-card/components/header-card/page/header-card.component';

@NgModule({
  declarations: [
    SummaryComponent,
    FinalizationComponent,
    FinishCardComponent,
    FinishFooterTotalComponent
  ],
  imports: [
    CommonModule,
    SummaryRoutingModule,
    FooterContentComponent,
    AddonsItemsComponent,
    HeaderCardComponent,
  ]
})
export class SummaryModule { }
