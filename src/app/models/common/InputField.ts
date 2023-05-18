import { FormControl } from "@angular/forms";

export interface InputField{
    label: string,
    type: string,
    name: string,
    placeholder: string,
    formControl: any,
    required: boolean
}