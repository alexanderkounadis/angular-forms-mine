import { Component, OnInit } from '@angular/core';
import { PizzaFormValidatorsService } from './services/pizza-form-validators.service';

@Component({
  selector: 'app-pizza-form-container',
  templateUrl: './pizza-form-container.component.html',
  styleUrls: ['./pizza-form-container.component.css'],
  // make component scoped services available (not globally)
  providers: [
    PizzaFormValidatorsService
  ]
})
export class PizzaFormContainerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
