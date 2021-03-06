import {Injectable} from '@angular/core';
import {Customers} from '../models/Customers';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {
  // handle data !!
  customers: Customers[];
  id = 1;

  constructor() {
    this.customers = [
      {id: this.id++, firstName: 'Hamza', lastName: 'BH', adresse: 'Paris 11'},
      {id: this.id++, firstName: 'Haroun', lastName: 'vv', adresse: 'Vertis'}
    ];
  }

  getCustomers(): Customers[] {
    return this.customers;
  }
  updateCustomer(customer: Customers) {
    const custToUpdate = this.customers.find(cust => customer.id === cust.id);
    const index = this.customers.indexOf(custToUpdate);
    this.customers[index] = customer;
  }

  addCustomer(customer: Customers) {
    // Add an object customer
    customer.id = this.id++;
    return this.customers.push(customer);
  }

  getCustomerById(id: number) {
    console.log('idcc', id);
    // console.log('getCustom', this.customers.find(Customers[id]));
    // tslint:disable-next-line:no-shadowed-variable
    return this.customers.find(customer => customer.id === id);
  }

  deleteCustomer(id: number) {
    this.customers = this.customers.filter(cust => cust.id !== id);
  }



}
