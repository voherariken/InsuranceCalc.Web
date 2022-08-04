import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appDateOfBirthValidator]',
  providers:[{
    provide : NG_VALIDATORS,
    useExisting : DateOfBirthValidatorDirective,
    multi : true
  }]
})
export class DateOfBirthValidatorDirective implements Validator {

  constructor() { }

  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    const dateOfBirth = new Date(control.value);
    const date = new Date();
    if(dateOfBirth > date || dateOfBirth.getFullYear() < 1900)
      return { 'invalidDateOfBirth' : true }
    else
      return null;
  }

}
