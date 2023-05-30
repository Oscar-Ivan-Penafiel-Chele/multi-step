import { Component, Input , OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ValidatorsService } from 'src/app/shared/services/validations/validators.service';
import { FormControl, FormsModule, ReactiveFormsModule, ValidationErrors } from '@angular/forms';

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
  @Input() submitted: boolean = false;

  constructor(private _validatorService: ValidatorsService){}

  ngOnInit(): void {
  }

  isInvalid(): boolean{
    const status: string = this.control.status;

    return status === 'INVALID' ? true : false;
  }

  displayErrors(): boolean{
    return this.submitted && this.isInvalid();
  }


}
