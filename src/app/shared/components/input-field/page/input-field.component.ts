import { Component, Input , OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ValidatorsService } from 'src/app/shared/services/validators.service';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'input-field',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.scss']
})
export class InputFieldComponent implements OnInit{
  @Input() control!: FormControl;
  @Input() label:string = '';
  @Input() type:string = '';
  @Input() name:string = '';
  @Input() placeholder:string = '';
  @Input() required: boolean = true;

  value: string = '';
  constructor(private _validatorService: ValidatorsService){}

  ngOnInit(): void {
    
  }

  displayErrors(){
    const {dirty, touched, errors} = this.control;
    return dirty && touched && errors;
  }
}
