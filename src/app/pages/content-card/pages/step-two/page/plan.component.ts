import { Component, effect, inject } from '@angular/core';
import { Plan, PlanInformation, SubscriptionType } from 'src/app/models';
import { ContentService } from '../../../service/content.service';
import { FooterService } from 'src/app/shared/components';
import { PlanService } from '../service/plan.service';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.scss']
})
export class PlanComponent{
  private NAME_OF_COMPONENT = "plan";
  protected planInformation!: PlanInformation;
  protected plan: Plan = {
    subscription : SubscriptionType.Monthly,
    information : this.planInformation
  };
  protected statusPlan: boolean = false;
  private contentService = inject(ContentService);
  private footerService = inject(FooterService);
  private planService = inject(PlanService);

  constructor(){
    this.setStatus();
  }

  protected setPlanSelected($event: PlanInformation): void{
    this.planInformation = $event;
    this.plan.information = this.planInformation;
  }

  private setStatus(): void{
    effect(() => {
      this.statusPlan = this.planService.statusPlan();
      this.plan.subscription = this.changeSubscription();
    })
  }

  private changeSubscription(): SubscriptionType{
    let subscription = this.statusPlan ? SubscriptionType.Yearly : SubscriptionType.Monthly;
    return subscription;
  }

  public validateData(): void{
    this.contentService.updateSignal(this.NAME_OF_COMPONENT, this.plan);
    this.footerService.next();
  }
}
