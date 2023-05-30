import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Plan, PlanInformation } from 'src/app/models';
import { PlanService } from '../../../service/plan.service';

@Component({
  selector: 'plans',
  templateUrl: './plan-card.component.html',
  styleUrls: ['./plan-card.component.scss']
})
export class PlanCardComponent implements OnInit, AfterViewInit{
  @Input() statusPlan: boolean = false;
  @Output() selectedPlan: EventEmitter<PlanInformation> = new EventEmitter<PlanInformation>();
  
  protected plans: PlanInformation[] = [];
  
  constructor(private _planService: PlanService){}

  ngOnInit(): void {
    this.setPlans();
  }

  ngAfterViewInit(): void {
    this._planService.activateFirstPlan();
    this.emitPlan(this.plans[0]);
  }

  private setPlans(): void{
    this.plans = this._planService.setPlans();
  }

  public selectPlan(plan: PlanInformation): void{
    this._planService.activatePlan();
    this.emitPlan(plan);
  }

  protected emitPlan(plan: PlanInformation): void{
    this.selectedPlan.emit(plan);
  }
}
