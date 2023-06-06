import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output, Signal, computed, effect, inject, signal } from '@angular/core';
import { Plan, PlanInformation } from 'src/app/models';
import { PlanService } from '../../../service/plan.service';
import { ContentService } from 'src/app/pages/content-card/service/content.service';

@Component({
  selector: 'plans',
  templateUrl: './plan-card.component.html',
  styleUrls: ['./plan-card.component.scss']
})
export class PlanCardComponent implements OnInit, AfterViewInit{
  
  @Output() 
  selectedPlan: EventEmitter<PlanInformation> = new EventEmitter<PlanInformation>();
  
  protected plans: PlanInformation[] = [];
  public statusPlan: boolean = false;
  private planService = inject(PlanService);
  private informationStep = this.planService.informationStep;

  constructor(){
    this.getStatusSignal();
  }

  ngOnInit(): void {
    this.getPlans();
  }

  ngAfterViewInit(): void {
    if(!this.informationStep?.plan){
      this.activateFirstPlan();
      return;
    }

    this.activateExistingPlan();
  }

  private activateFirstPlan(): void{
    this.planService.activateFirstPlan();
    this.emitPlan(this.plans[0]);
  }

  private activateExistingPlan(): void{
    this.planService.activateExistingPlan();
    this.emitPlan(this.informationStep.plan!.information);
  }

  private getPlans(): void{
    this.plans = this.planService.getPlans();
  }

  public selectPlan(plan: PlanInformation): void{
    this.planService.activatePlan();
    this.emitPlan(plan);
  }

  protected emitPlan(plan: PlanInformation): void{
    this.selectedPlan.emit(plan);
  }

  private getStatusSignal(): void{
    effect(() => {
      this.statusPlan = this.planService.statusPlan();
    })
  }
}
