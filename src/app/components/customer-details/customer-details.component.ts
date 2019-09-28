import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {
/*
  customer details component that will receive only the formGroup related 
  to the customer details, this will allow as to
  reuse the customerDetails with other forms in our application 
  as long as the customer details component stays "dumb" 
  and isolated from the parent form structure
*/
@Input() group: FormGroup;
  constructor() { }

  ngOnInit() {
  }

}
