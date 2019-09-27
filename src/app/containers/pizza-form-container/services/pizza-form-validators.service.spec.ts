/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PizzaFormValidatorsService } from './pizza-form-validators.service';

describe('Service: PizzaFormValidators', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PizzaFormValidatorsService]
    });
  });

  it('should ...', inject([PizzaFormValidatorsService], (service: PizzaFormValidatorsService) => {
    expect(service).toBeTruthy();
  }));
});
