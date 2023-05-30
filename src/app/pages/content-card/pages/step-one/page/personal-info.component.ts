import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { InputField, PersonalInformation } from 'src/app/models';
import { PersonalInfoService } from '../service/personal-info.service';
import { ValidatorsService } from 'src/app/shared/services/validations/validators.service';
import { ContentService } from '../../../service/content.service';

@Component({
  selector: 'personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss']
})
export class PersonalInfoComponent implements OnInit{
  protected inputs_field: InputField[] = []
  protected formData!: FormGroup;
  protected submitted: boolean = false;
  private isValid: boolean = false;
  private NAME_OF_COMPONENT = "personal_information";

  constructor(
    private _personalInfoService: PersonalInfoService, 
    private _validatorService: ValidatorsService,
    private _contentService: ContentService
  ){}

  ngOnInit(): void {
    this.createFormData();
   
  }

  createFormData(): void{
    this.formData = this._personalInfoService.setFormData();
    this.inputs_field = this._personalInfoService.setInputsFields();
  }

  validate(){
    this.submitted = true;
    
    this.isValid = this.formData.status == 'INVALID' ? false : true;
    this._validatorService.validator$.next(this.isValid);

    if(this.isValid){
      this._contentService.updateBehavior<PersonalInformation>(this.NAME_OF_COMPONENT, this.formData.value);
    }
  }
}
