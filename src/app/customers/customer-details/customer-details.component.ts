import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Customers} from '../../shared/models/Customers';
import {CustomersService} from '../../shared/services/customers.service';


@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {
   customer: Customers;
   idc: number;

  constructor(private route: ActivatedRoute, private custSer: CustomersService) { }

  ngOnInit() {
         const idc = +this.route.snapshot.paramMap.get('id');
         console.log('idc== ', idc);
         return this.customer = this.custSer.getCustomerById(idc);

  }

}
