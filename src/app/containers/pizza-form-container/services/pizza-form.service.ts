import { Injectable } from '@angular/core';
import { PizzaFormValidatorsService } from './pizza-form-validators.service';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { PizzaToppingsEnum, IToppingItem } from './pizza-form.interface';

@Injectable()
export class PizzaFormService {
  public availableToppings = [...Object.values(PizzaToppingsEnum)];
  public form: FormGroup;

constructor(
  private pizzaValidatorsService: PizzaFormValidatorsService,
  private fb: FormBuilder
) { 
  this.form = this.fb.group({
    selectedPizza: null,
    pizzas: this.fb.array([]),
    customerDetails: this.fb.group({
      firstName: [null, Validators.required],
      lastName: [null, Validators.required],
      phoneNumber: [null, Validators.required],
      address: this.fb.group({
        street: [null, Validators.required],
        houseNum: [null, Validators.required],
        city: [null, Validators.required],
        floor: [null, Validators.required]
      })
    })
  }, {
    validator: this.pizzaValidatorsService.formValidator()
  });
}

// getters
get pizzasArray(): FormArray {
  return this.form.get('pizzas') as FormArray;
}

get isValid(): boolean {
  if(!this.form.valid) {
    this.pizzaValidatorsService.validateAllFormFields(this.form);
    return false;
  }
  return true;
}

getselectedToppings(toppings: IToppingItem[]): IToppingItem[] {
  return toppings.filter(t => t.selected);
}


}
