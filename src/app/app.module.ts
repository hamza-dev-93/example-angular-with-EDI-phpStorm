import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CustomersListComponent} from './customers/customers-list/customers-list.component';
import {NavbarComponent} from './shared/navbar/navbar.component';
import {WelcomeComponent} from './welcome/welcome.component';
import {CustomerDetailsComponent} from './customers/customer-details/customer-details.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomersListComponent,
    NavbarComponent,
    WelcomeComponent,
    CustomerDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
