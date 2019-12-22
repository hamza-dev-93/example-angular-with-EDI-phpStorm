import { Component, OnInit } from '@angular/core';
import {CustomersService} from '../../shared/services/customers.service';
import {Customers} from '../../shared/models/Customers';
import {FormControl, FormGroup} from '@angular/forms';
import {Router} from "@angular/router";

@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.css']
})
export class CustomerAddComponent implements OnInit {
  customers: Customers[];

  customerForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    adresse: new FormControl('')
  });

  constructor(private route: Router, private customerServ: CustomersService) { }

  ngOnInit() {
    this.customers = this.customerServ.getCustomers();
  }

  addCustomer() {
    const customer = this.customerForm.value;
    this.customerServ.addCustomer(customer);
    this.customerForm.reset();
    this.route.navigateByUrl('/customers');

  }


}
