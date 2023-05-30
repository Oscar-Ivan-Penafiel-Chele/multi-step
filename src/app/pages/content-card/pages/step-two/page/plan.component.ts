import { Component } from '@angular/core';
import { Plan, PlanInformation, SubscriptionType } from 'src/app/models';
import { PlanService } from '../service/plan.service';
import { ContentService } from '../../../service/content.service';
import { ValidatorsService } from 'src/app/shared/services/validations/validators.service';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.scss']
})
export class PlanComponent{
  private NAME_OF_COMPONENT = "plan";
  public statusPlan: boolean = false;
  protected planInformation!: PlanInformation;
  protected plan: Plan = {
    subscription : SubscriptionType.Monthly,
    information : this.planInformation
  };

  constructor(private _contentService: ContentService, private _validatorService: ValidatorsService){}

  changeStatusPlan($event: boolean): void{
    this.statusPlan = $event;
    this.plan.subscription = this.statusPlan ? SubscriptionType.Yearly : SubscriptionType.Monthly;
  }

  setPlanSelected($event: PlanInformation){
    this.planInformation = $event;
    this.plan.information = this.planInformation;
  }

  validateData(){
    this._validatorService.validator$.next(true);
    this._contentService.updateBehavior<Plan>(this.NAME_OF_COMPONENT, this.plan);
  }
}
