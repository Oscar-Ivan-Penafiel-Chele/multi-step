import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidatorsService {

  constructor() {}

  validateData(): boolean{
    alert("Verificando ...");
    

    return false;
  }

  isEmptyField(): boolean{

    return false;
  }
}
