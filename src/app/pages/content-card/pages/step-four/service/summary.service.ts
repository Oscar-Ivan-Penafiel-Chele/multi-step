import { Injectable, inject } from '@angular/core';
import { ContentService } from '../../../service/content.service';
import { PlanService } from '../../step-two/service/plan.service';
import { AddOn, SubscriptionType } from 'src/app/models';

@Injectable({
  providedIn: 'root'
})
export class SummaryService {
  private contentService = inject(ContentService);
  private planService = inject(PlanService);

  public informationStep = this.contentService.informationStep();

  constructor() { }

  public getStatus(): boolean{
    if(!this.informationStep) return false;

    const subscription = this.informationStep.plan?.subscription!;
    return this.planService.getStatusValue(subscription);
  }

  public getTotal(): number{
    if(!this.informationStep) return 0;

    const totalPlan = this.informationStep.plan?.information.price;
    const addOns = this.informationStep.addOns;
    let totalAddons = 0;
    let total = 0;
   
    addOns?.map((item: AddOn) => {
      totalAddons += item.price;
    })

    total = totalPlan! + totalAddons;
    
    return total;
  }

  public getSubscription(): SubscriptionType{
    if(!this.informationStep.plan) return SubscriptionType.Monthly;
    
    return this.informationStep.plan!.subscription
  }
}
