import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ValidatorsService {
  public validator$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() {}
}
