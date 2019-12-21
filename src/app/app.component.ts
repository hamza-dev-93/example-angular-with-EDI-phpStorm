import { Component } from '@angular/core';
import {Customers} from "./shared/models/Customers";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  click = 0;
  items = ['item1', 'item2', 'item3', 'item4'];


  nbreClick() {
    this.click++;
    this.items.push('item' + this.click);

  }
}
