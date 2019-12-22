import {Component, OnInit} from '@angular/core';
import {Customers} from '../../shared/models/Customers';
import {CustomersService} from '../../shared/services/customers.service';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.css']
})
export class CustomersListComponent implements OnInit {
  customers: Customers[];
  click = 0;

  constructor(private customerServ: CustomersService) {
  }

  ngOnInit() {
    this.customers = this.customerServ.getCustomers();
  }

  delete(id: number) {
    console.log('idcc= ', id);
    this.customerServ.deleteCustomer(id);
    this.customers = this.customerServ.getCustomers();
  }

}
