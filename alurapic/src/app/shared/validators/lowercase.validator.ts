import { AbstractControl } from '@angular/forms';
import { controlNameBinding } from '@angular/forms/src/directives/reactive_directives/form_control_name';

export function lowerCaseValidator(control: AbstractControl){


  if(control.value.trim() && !/^[a-z0-9_\-]+$/.test(control.value)){
    return {lowerCase: true}
  }
  return null
 }