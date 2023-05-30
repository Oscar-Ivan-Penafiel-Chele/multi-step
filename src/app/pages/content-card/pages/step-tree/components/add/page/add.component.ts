import { AfterViewInit, Component, OnInit } from '@angular/core';
import { AddOnsService } from '../../../service/add-ons.service';
import { AddOn } from 'src/app/models/common/AddOn';

@Component({
  selector: 'addOns',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit{
  protected addOns: AddOn[] = [];

  constructor(private _addOnService: AddOnsService){}

  ngOnInit(): void {
    this.setAddOns();
  } 

  private setAddOns(): void{
    this.addOns = this._addOnService.setAddOns();
  }

  protected selectAddOn(addOn: AddOn, index: number){
    this._addOnService.activateAddOn(index, addOn);
  }
}
