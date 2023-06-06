import { Injectable, inject, signal } from '@angular/core';
import { Information, Plan, PlanInformation, SubscriptionType } from 'src/app/models';
import { ContentService } from '../../../service/content.service';

@Injectable({
  providedIn: 'root'
})
export class PlanService {
  private readonly urlImage: string = '../../../../../../assets/images';
  private plans: PlanInformation[] = [];
  private plansAux: PlanInformation[] = [];
  public statusPlan = signal<boolean>(false);
  private contentService = inject(ContentService);
  public informationStep: Information = this.contentService.informationStep();

  constructor() {
    this.setPlans();
   }
  
  private setPlans(): void{
    this.plansAux = [
      {
        image: `${this.urlImage}/icon-arcade.svg`,
        title: 'Arcade',
        price: 9 ,
        detail: '2 months free'
      },
      {
        image: `${this.urlImage}/icon-advanced.svg`,
        title: 'Advance',
        price: 12 ,
        detail: '2 months free'
      },
      {
        image: `${this.urlImage}/icon-pro.svg`,
        title: 'Pro',
        price: 15 ,
        detail: '2 months free'
      }
    ];
  }

  public getPlans(): PlanInformation[]{
    this.plans = this.plansAux;
    return this.plans;
  }

  public getElementsPlans(): NodeListOf<Element>{
    const plans: NodeListOf<Element> = document.querySelectorAll('.plan__section__cards__item');
    return plans;
  }

  public activateExistingPlan(): void{
     const id = this.informationStep.plan!.information.title;
    const planExisted = document.getElementById(id!);

    planExisted!.classList.add('active');
    this.listenerPlans();
  }

  public activateFirstPlan(): void{
    const plansElements: NodeListOf<Element> = this.getElementsPlans();

    if(plansElements.length <= 0) return;

    plansElements[0].classList.add('active');
    this.listenerPlans();
  }

  public activatePlan(): void{
    this.listenerPlans();
  }

  private listenerPlans(): void{
    const plansElements: NodeListOf<Element> = this.getElementsPlans();

    if(plansElements.length <= 0) return;

    plansElements.forEach((plan: Element) => {
      plan.addEventListener('click',() => {
        this.inactivateAllPlans();
        plan.classList.add('active');
      })
    });
  }

  private inactivateAllPlans(): void{
    const plansElements: NodeListOf<Element> = this.getElementsPlans();

    plansElements.forEach((plan: Element) => {
      plan.classList.remove('active');
    })
  }

  public changeStatusPlan(status: boolean): void{
    this.statusPlan.set(status);
    this.setPricePlan();
  }

  private setPricePlan(): void{
    const multiplier = this.statusPlan() ? 10 : 0.1;

    this.plansAux.forEach((plan: PlanInformation) => {
      plan.price *= multiplier;
    });
  }

  public getStatusValue(subscription: SubscriptionType): boolean{
    let status: boolean = false;
    subscription == SubscriptionType.Monthly ? status = false : status = true;

    return status;
  }
}
