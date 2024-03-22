import { Component } from '@angular/core';
import { ProductsListComponent } from '../shopping/products-list/products-list.component';
import { CartItemsComponent } from '../shopping/cart-items/cart-items.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ ProductsListComponent, CartItemsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
