import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PlanService } from '../../../service/plan.service';

@Component({
  selector: 'switch-plan',
  templateUrl: './switch-plan.component.html',
  styleUrls: ['./switch-plan.component.scss']
})
export class SwitchPlanComponent implements OnInit{
  statusPlan: boolean = false;

  @Output() setPlan: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private _planService: PlanService){}

  ngOnInit(): void {
    //this.setInformationPlan(this.statusPlan);
  }

  changePlan($event: any): void{
    this.statusPlan = $event.target.checked;
    this.setInformationPlan(this.statusPlan);
  }

  setInformationPlan(statusPlan: boolean){
    this.setPlan.emit(statusPlan);
    this._planService.setPricePlan(this.statusPlan);
  }
}
