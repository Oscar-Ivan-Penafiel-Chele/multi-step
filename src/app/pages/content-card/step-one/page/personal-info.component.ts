import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { InputField } from 'src/app/models';

@Component({
  selector: 'personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss']
})
export class PersonalInfoComponent implements OnInit{
  formData!: FormGroup;
  protected inputs_field: InputField[] = []

  ngOnInit(): void {
    this.createFormData();
    this.createInputsFields();
  }

  createFormData(): void{
    this.formData = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(2)]),
      email: new FormControl('', [Validators.required, Validators.minLength(2)]),
      phone: new FormControl('', [Validators.required, Validators.minLength(2)]),
    });
  }

  createInputsFields(){
    this.inputs_field = [
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
    ]
  }

  
}
