import { Component, OnInit } from '@angular/core';
import {Customers} from "../../shared/models/Customers";

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.css']
})
export class CustomersListComponent implements OnInit {
  customers: Customers[];
  click = 0;
  constructor() { }

  ngOnInit() {

    this.customers = [
      { id: 1, firstName: 'Hamza', lastName: 'BH', adresse: 'Paris' },
      { id: 3, firstName: 'Haroun', lastName: 'vv', adresse: 'Vertis' }
    ];

  }
  nbreClick() {
    this.click++;
    this.customers.push({
      id: 2,
      firstName: 'amine',
      lastName: 'bb',
      adresse: 'villepint'
    });
  }

}
