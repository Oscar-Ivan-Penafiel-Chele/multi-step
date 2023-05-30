import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Information } from 'src/app/models';

@Injectable({
  providedIn: 'root'
})
export class ContentService {
  public informationSteps$ = new BehaviorSubject<Information | null>(null);

  constructor() { }

  public updateBehavior<T>(key: string, value: T){
    const currentValue = this.informationSteps$.value;
    const updatedValue = { ...currentValue, [key]: value };
    this.informationSteps$.next(updatedValue);

    this.informationSteps$.subscribe((v)=>{
      console.log(v)
    })
  }

}
