import { Component, OnInit, inject } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { InputField, PersonalInformation } from 'src/app/models';
import { PersonalInfoService } from '../service/personal-info.service';
import { ContentService } from '../../../service/content.service';
import { FooterService } from 'src/app/shared/components';

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

  private personalInfoService = inject(PersonalInfoService);
  private footerService = inject(FooterService);
  private contentService = inject(ContentService);

  constructor(){}

  ngOnInit(): void {
    this.createFormData();
  }

  createFormData(): void{
    this.formData = this.personalInfoService.setFormData();
    this.inputs_field = this.personalInfoService.setInputsFields();
  }

  validate(){
    this.submitted = true;
    this.isValid = this.formData.status == 'INVALID' ? false : true;
    
    if(!this.isValid) return;

    this.contentService.updateSignal(this.NAME_OF_COMPONENT, this.formData.getRawValue());
    this.footerService.next();
  }
}
