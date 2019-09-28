/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PizzaFormService } from './pizza-form.service';

describe('Service: PizzaForm', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PizzaFormService]
    });
  });

  it('should ...', inject([PizzaFormService], (service: PizzaFormService) => {
    expect(service).toBeTruthy();
  }));
});
