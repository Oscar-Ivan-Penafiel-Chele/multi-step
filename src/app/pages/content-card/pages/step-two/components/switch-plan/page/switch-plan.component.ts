import { AfterContentChecked, Component, ChangeDetectionStrategy, EventEmitter, OnInit, Output, ChangeDetectorRef, AfterViewInit, AfterViewChecked, AfterContentInit, inject  } from '@angular/core';
import { ContentService } from 'src/app/pages/content-card/service/content.service';
import { PlanService } from '../../../service/plan.service';
import { SubscriptionType } from 'src/app/models';

@Component({
  selector: 'switch-plan',
  templateUrl: './switch-plan.component.html',
  styleUrls: ['./switch-plan.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SwitchPlanComponent implements OnInit, AfterViewChecked{
  statusPlan: boolean;
  private planService = inject(PlanService);

  constructor(){
    this.statusPlan = this.getStatus();
  }
    
  ngOnInit(): void {
  }

  ngAfterViewChecked(): void {
    this.setCheckbox();
  }

  private getStatus(): boolean{
    const informationStepPlan = this.planService.informationStep.plan;
    if(!informationStepPlan) return false;

    return this.planService.getStatusValue(informationStepPlan.subscription);
  }

  private setCheckbox(): void{
    if(!this.planService.informationStep.plan) return;

    const input = document.getElementById('checkbox')! as HTMLInputElement;
    this.statusPlan ?  input.checked = true : input.checked = false;
  }

  changePlan($event: any): void{
    this.statusPlan = $event.target.checked;
    this.planService.changeStatusPlan(this.statusPlan);
  }
}