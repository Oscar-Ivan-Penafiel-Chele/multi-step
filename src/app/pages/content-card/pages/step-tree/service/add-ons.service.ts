import { Injectable, inject } from '@angular/core';
import { AddOn, AddOnElements } from 'src/app/models/common/AddOn';
import { ContentService } from '../../../service/content.service';
import { PlanService } from '../../step-two/service/plan.service';

@Injectable({
  providedIn: 'root'
})
export class AddOnsService {
  public addOnsSelected: AddOn[] = [];
  private contentService = inject(ContentService);
  private planService = inject(PlanService);
  protected informationStep = this.contentService.informationStep();

  constructor() {}

  public setAddOns(): AddOn[]{
    return [
      {
        name: 'online',
        title: 'Online service',
        detail: 'Access to multiplayer games',
        price: 1
      },
      {
        name: 'larger',
        title: 'Larger storage',
        detail: 'Extra 1 TB of cloud save',
        price: 2
      },
      {
        name: 'custom',
        title: 'Customizable Profile',
        detail: 'Custom theme on your profile',
        price: 2
      }
    ];
  }

  public getAddons(): AddOn[]{
    const statusPlan = this.getStatus();

    if(!statusPlan){
      return this.setAddOns();
    }else{
      return this.getAddOnYearly();
    }
  }

  private getAddOnYearly(): AddOn[]{
    const multiplier = 10;
    const addOns = this.setAddOns();

    addOns.forEach((addOn: AddOn) =>{
      addOn.price *= multiplier;
    })

    return addOns;
  }

  public getStatus(): boolean{
    if(!this.informationStep.plan) return false;

    const subscription = this.informationStep.plan.subscription;
    const statusPlan = this.planService.getStatusValue(subscription!);

    return statusPlan;
  }

  protected getElementsAddOns(): NodeListOf<Element>{
    const elements: NodeListOf<Element> = document.querySelectorAll('.cards__addOn__item');
    return elements;
  }

  public activateAddOn(index: number, addOn: AddOn): void{
    const elements = this.getElementsAddOns();
    const elementSelect = elements[index];

    elementSelect.classList.toggle('active');
    this.setAddOnsSelected(elementSelect, addOn);
  }

  public setAddOnsSelected(element: Element, addOn: AddOn): void{
    this.isSelected(element) ? this.addOnsSelected.push(addOn) : this.deleteItem(addOn);
    return;
  }

  private isSelected(element: Element): boolean{
    return element.classList.contains('active');
  }

  private deleteItem(addOn: AddOn): void{
    const index: number = this.addOnsSelected.findIndex((add: AddOn) => add.name == addOn.name);

    this.addOnsSelected.splice(index, 1);
  }
}
