import { Injectable } from '@angular/core';
import { Plan, PlanInformation } from 'src/app/models';

@Injectable({
  providedIn: 'root'
})
export class PlanService {
  private readonly urlImage: string = '../../../../../../assets/images';
  private plans: PlanInformation[] = [];

  constructor() {
    this.plans = [
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
    ]
   }

  public setPlans(): PlanInformation[]{
    return this.plans;
  }

  public getPlans(): NodeListOf<Element>{
    const plans: NodeListOf<Element> = document.querySelectorAll('.plan__section__cards__item');
    return plans;
  }

  public activateFirstPlan(): void{
    const plansElements: NodeListOf<Element> = this.getPlans();

    plansElements[0].classList.add('active');
    this.listenerPlans(plansElements);
  }

  public activatePlan(): void{
    const plansElements: NodeListOf<Element> = this.getPlans();
    this.listenerPlans(plansElements);
  }

  private listenerPlans(plansElements: NodeListOf<Element>): void{
    plansElements.forEach((plan: Element) => {
      plan.addEventListener('click',() => {
        this.inactivateAllPlans();
        plan.classList.add('active');
      })
    });
  }

  private inactivateAllPlans(): void{
    const plansElements: NodeListOf<Element> = this.getPlans();

    plansElements.forEach((plan: Element) => {
      plan.classList.remove('active');
    })
  }

  public setPricePlan(statusPlan: boolean): void{
    const multiplier = statusPlan ? 10 : 0.1;

    this.plans.forEach((plan: PlanInformation) => {
      plan.price *= multiplier;
    });
  }
}
