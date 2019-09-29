import { Component, OnInit } from '@angular/core';
import { PizzaFormValidatorsService } from './services/pizza-form-validators.service';
import { FormGroup } from '@angular/forms';
import { PizzaFormService } from './services/pizza-form.service';

@Component({
  selector: 'app-pizza-form-container',
  templateUrl: './pizza-form-container.component.html',
  styleUrls: ['./pizza-form-container.component.css'],
  // make component scoped services available (not globally)
  providers: [
    PizzaFormService,
    PizzaFormValidatorsService
  ]
})
export class PizzaFormContainerComponent implements OnInit {
  
  get form(): FormGroup{
    return this.pizzaFormService.form;
  }

  onPizzaAdd() {
    console.log('pizza added');
  }
  
  constructor(private pizzaFormService: PizzaFormService) { }

  ngOnInit() {
  }

}
