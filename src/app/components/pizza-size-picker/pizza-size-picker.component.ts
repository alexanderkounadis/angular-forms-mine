import { Component, OnInit, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { PizzaSizeEnum } from 'src/app/containers/pizza-form-container/services/pizza-form.interface';

@Component({
  selector: 'app-pizza-size-picker',
  templateUrl: './pizza-size-picker.component.html',
  styleUrls: ['./pizza-size-picker.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => PizzaSizePickerComponent),
    multi: true
  }
]
})
export class PizzaSizePickerComponent implements ControlValueAccessor  {
  pizzaSize: PizzaSizeEnum;
  PizzaSizeEnum = PizzaSizeEnum;

  propagateChange = (value: PizzaSizeEnum) => {};

  writeValue(value: PizzaSizeEnum) {
    this.pizzaSize = value;
  }
  
  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }
  
  registerOnTouched() {}

  constructor() { }


}
