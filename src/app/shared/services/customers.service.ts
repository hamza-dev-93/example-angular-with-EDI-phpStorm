import { Injectable } from '@angular/core';
import {Customers} from '../models/Customers';
import {count} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class CustomersService {
  // handle data !!
  customers: Customers[];

  constructor() {
    this.customers = [
      { id: 0, firstName: 'Hamza', lastName: 'BH', adresse: 'Paris' },
      { id: 1, firstName: 'Haroun', lastName: 'vv', adresse: 'Vertis' }
    ];
  }

  getCustomers(): Customers[] {
    return this.customers;
  }

  addCustomer(customer: Customers) {
    // Add an object customer
    return this.customers.push(customer);
  }

}
