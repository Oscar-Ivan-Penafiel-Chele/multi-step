import { AfterViewInit, Component, OnInit, inject } from '@angular/core';
import { AddOnsService } from '../../../service/add-ons.service';
import { AddOn } from 'src/app/models/common/AddOn';

@Component({
  selector: 'addOns',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit, AfterViewInit{
  protected addOns: AddOn[] = [];
  protected statusPlan: boolean = false;
  private addOnService = inject(AddOnsService)

  constructor(){
    this.statusPlan = this.addOnService.getStatus();
  }

  ngOnInit(): void {
    this.getAddOns();
  } 

  ngAfterViewInit(): void {
    this.addOnService.getAddOnsExisting();
  }

  private getAddOns(): void{
    this.addOns = this.addOnService.getAddons();
  }

  protected selectAddOn(addOn: AddOn, index: number){
    this.addOnService.activateAddOn(index, addOn);
  }
}
