import { Injectable } from '@angular/core';
import { ValidatorFn, ValidationErrors } from '@angular/forms';

@Injectable(
  // !!! we do not want a singleton svc here 
  // therefore we do not inject it in global injector
  // providedIn: 'root'
  )
export class PizzaFormValidatorsService {

constructor() { }

formValidator() : ValidatorFn {
  const errors: ValidationErrors = {};
  return null;
}

}
