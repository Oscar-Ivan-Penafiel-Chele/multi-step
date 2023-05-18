import { Component } from '@angular/core';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.scss']
})
export class PlanComponent {
  switch: boolean = false;

  clik(){
    console.log(this.switch)
  }
}
