import { Component, inject } from '@angular/core';
import { SummaryService } from '../../../service/summary.service';
import { SubscriptionType } from 'src/app/models';

@Component({
  selector: 'finish-footer-total',
  templateUrl: './finish-footer-total.component.html',
  styleUrls: ['./finish-footer-total.component.scss']
})
export class FinishFooterTotalComponent {
  private summaryService = inject(SummaryService);
  protected total: number = this.summaryService.getTotal();
  protected statusPlan: boolean = this.summaryService.getStatus();
  protected subscription: SubscriptionType;
  protected subPlan: string = ''; 

  constructor(){
    this.subscription = this.summaryService.getSubscription();
    this.convertPlan();
  }

  private convertPlan(){
    const subString = this.subscription!.toString();
    const subSlice = subString.slice(0, subString.length - 2);
    this.subPlan = subSlice;
  }

 
}
