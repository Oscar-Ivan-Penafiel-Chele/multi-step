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

  constructor() {
    this.addOnsSelected = [];
  }

  public setAddOns(): AddOn[]{
    return [
      {
        id: 1,
        name: 'online',
        title: 'Online service',
        detail: 'Access to multiplayer games',
        price: 1
      },
      {
        id: 2,
        name: 'larger',
        title: 'Larger storage',
        detail: 'Extra 1 TB of cloud save',
        price: 2
      },
      {
        id: 3,
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

  public getAddOnsExisting(): void{
    const addOnExisting: AddOn[] = this.informationStep.addOns!;

    if(!addOnExisting) return; 

    this.addOnsSelected = [];

    addOnExisting.forEach((addOn: AddOn) => {
      const index: number = addOn.id - 1;
      const addOnMatch: AddOn | undefined  = this.getAddons().find((i) => i.id == addOn.id );

      if(addOnMatch){
        addOn.price = addOnMatch.price;
        this.activateAddOn(index, addOn);
        this.checkAddOnExisting(addOn);
      }
    });
  }

  private checkAddOnExisting(addOn: AddOn): void{
    const inputCheckBox = document.getElementById(addOn.name) as HTMLInputElement;
    inputCheckBox.checked = true;
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
    this.isSelected(element) ? this.addItem(addOn) : this.deleteItem(addOn);
    return;
  }

  private addItem(addOn: AddOn): void{
    this.addOnsSelected.push(addOn);
    this.addOnsSelected.sort((a: AddOn,b: AddOn) => a.id - b.id)
  }

  private isSelected(element: Element): boolean{
    return element.classList.contains('active');
  }

  private deleteItem(addOn: AddOn): void{
    const index: number = this.addOnsSelected.findIndex((add: AddOn) => add.name == addOn.name);

    this.addOnsSelected.splice(index, 1);
  }
}
