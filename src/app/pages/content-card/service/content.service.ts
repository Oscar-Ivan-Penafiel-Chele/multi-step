import { Injectable, signal } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AddOn, Information, PersonalInformation, Plan, SubscriptionType } from 'src/app/models';

type customType = PersonalInformation | Plan | AddOn[]

@Injectable({
  providedIn: 'root'
})
export class ContentService {
  public informationStep = signal<Information>({});

  constructor() { }

  public updateSignal(key: string, value: customType): void{
    this.informationStep()[key]! = value;
  }
}
