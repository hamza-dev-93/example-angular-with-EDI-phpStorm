import {Injectable} from '@angular/core';
import {Customers} from '../models/Customers';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {
  // handle data !!
  customers: Customers[];

  constructor() {
    this.customers = [
      {id: 1, firstName: 'Hamza', lastName: 'BH', adresse: 'Paris 11'},
      {id: 2, firstName: 'Haroun', lastName: 'vv', adresse: 'Vertis'}
    ];
  }

  getCustomers(): Customers[] {
    return this.customers;
  }

  addCustomer(customer: Customers) {
    // Add an object customer
    return this.customers.push(customer);
  }

  getCustomerById(id: number) {
    console.log('idcc', id);
    // console.log('getCustom', this.customers.find(Customers[id]));
    // tslint:disable-next-line:no-shadowed-variable
    return this.customers.find(customer => customer.id === id);
  }

}
