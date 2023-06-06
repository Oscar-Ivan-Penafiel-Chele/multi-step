import { Injectable, signal } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AddOn, Information, PersonalInformation, Plan, SubscriptionType } from 'src/app/models';

type customType = PersonalInformation | Plan | AddOn[]

@Injectable({
  providedIn: 'root'
})
export class ContentService {
  // public informationSteps$ = new BehaviorSubject<Information | null>(null);
  public informationStep = signal<Information>({});

  constructor() { }

  // public updateBehavior<T>(key: string, value: T){
  //   const currentValue = this.informationSteps$.value;
  //   const updatedValue = { ...currentValue, [key]: value };
  //   this.informationSteps$.next(updatedValue);

  //   console.log(this.informationSteps$.value);
  // }

  // public getBehavior(): BehaviorSubject<Information | null>{
  //   return this.informationSteps$;
  // }

  public updateSignal(key: string, value: customType): void{
    this.informationStep()[key]! = value;
    console.log(this.informationStep());
  }
}
