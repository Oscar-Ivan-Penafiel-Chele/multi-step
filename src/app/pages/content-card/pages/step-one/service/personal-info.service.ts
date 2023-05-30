import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { InputField } from 'src/app/models';

@Injectable({
  providedIn: 'root'
})
export class PersonalInfoService {
  formData!: FormGroup;
  
  constructor() { 
    this.setFormData();
  }

  public setInputsFields(): InputField[]{
    return [
      {
        label: 'Name',
        type: 'text',
        name: 'name',
        placeholder: 'e.g. Stephen King',
        formControl: this.formData.get('name'),
        required: true
      },
      {
        label: 'Email Address',
        type: 'email',
        name: 'email',
        placeholder: 'e.g. stephenking@lorem.com',
        formControl: this.formData.get('email'),
        required: true
      },
      {
        label: 'Phone Number',
        type: 'phone',
        name: 'phone',
        placeholder: 'e.g. +1 234 567 890',
        formControl: this.formData.get('phone'),
        required: true
      }
    ];
  }

  public setFormData(): FormGroup{
    this.formData = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(2)]),
      email: new FormControl('', [Validators.required, Validators.minLength(2)]),
      phone: new FormControl('', [Validators.required, Validators.minLength(2)]),
    });

    return this.formData;
  }


  
}
