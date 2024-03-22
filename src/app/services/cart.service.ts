import { Injectable } from '@angular/core';
import { CartItem } from '../models/cart-item.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartData: CartItem[] = [];

  getCartItems(){
    return this.cartData
  }

  addCartItem(newItem: CartItem){
    this.cartData.push(newItem);
  }

  deleteCartItem(idx:number){
    this.cartData.splice(idx, 1)
  }


}
