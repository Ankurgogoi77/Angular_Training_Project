import { Component, inject } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CartItem } from '../../models/cart-item.model';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-cart-items',
  standalone: true,
  imports: [ MatButtonModule],
  templateUrl: './cart-items.component.html',
  styleUrl: './cart-items.component.css'
})
export class CartItemsComponent {
  private cartSvc = inject(CartService)
  cartItems: CartItem[] = []

  ngOnInit() {
    this.cartItems = this.cartSvc.getCartItems()
  }

  deleteFromCart(id:number){
    let idx = this.cartItems.findIndex((e) => e.id == id)
    this.cartSvc.deleteCartItem(idx)
  }

}
