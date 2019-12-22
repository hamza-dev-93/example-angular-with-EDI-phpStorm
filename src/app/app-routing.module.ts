import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {WelcomeComponent} from './welcome/welcome.component';
import {CustomersListComponent} from './customers/customers-list/customers-list.component';
import {CustomerDetailsComponent} from './customers/customer-details/customer-details.component';
import {CustomerAddComponent} from "./customers/customer-add/customer-add.component";
import {CustomerUpdateComponent} from "./customers/customer-update/customer-update.component";


const routes: Routes = [
  {path: '', component: WelcomeComponent},
  {path: 'customers/:id', component: CustomerDetailsComponent},
  {path: 'customers', component: CustomersListComponent},
  {path: 'customers-add', component: CustomerAddComponent},
  {path: 'customer-update/:id', component: CustomerUpdateComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
