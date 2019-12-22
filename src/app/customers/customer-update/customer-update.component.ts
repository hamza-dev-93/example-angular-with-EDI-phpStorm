import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CustomersService} from '../../shared/services/customers.service';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-customer-update',
  templateUrl: './customer-update.component.html',
  styleUrls: ['./customer-update.component.css']
})
export class CustomerUpdateComponent implements OnInit {
  id: number;

  customerForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    adresse: new FormControl('')
  });

  constructor(private route: ActivatedRoute, private router: Router, private customSer: CustomersService) { }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    const customer = this.customSer.getCustomerById(Number(this.id));
    this.customerForm.patchValue({
      firstName: customer.firstName,
      lastName: customer.lastName,
      adresse: customer.adresse
    });
  }

  update() {
    const customer = this.customerForm.value;
    customer.id = this.id;
    console.log('custtt== ', customer);
    this.customSer.updateCustomer(customer);
    this.router.navigateByUrl('/customers');
    /* this.customerForm.reset();
    this.router.navigateByUrl('/customers');*/

  }

}
