import { Injectable, inject } from '@angular/core';
import { UntypedFormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { InputField } from 'src/app/models';
import { ContentService } from '../../../service/content.service';

@Injectable({
  providedIn: 'root'
})
export class PersonalInfoService {
  protected formData!: FormGroup;
  private contentService = inject(ContentService);
  
  constructor(private formBuilder: UntypedFormBuilder) { 
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

  private createFormData(): void{
    this.formData = this.formBuilder.nonNullable.group({
      name: new FormControl('', [Validators.required, Validators.minLength(2)]),
      email: new FormControl('', [Validators.required, Validators.minLength(2), Validators.email]),
      phone: new FormControl('', [Validators.required, Validators.minLength(2)]),
    })
  }

  public setFormData(): FormGroup{
    this.createFormData();
    this.handleValues();

    return this.formData;
  }

  private handleValues(){
    const informationStep = this.contentService.informationStep();

    if (!informationStep) return;

    const personal_information = informationStep.personal_information;
    
    this.formData.get('name')?.setValue(personal_information?.name);
    this.formData.get('email')?.setValue(personal_information?.email);
    this.formData.get('phone')?.setValue(personal_information?.phone);
  }
}
