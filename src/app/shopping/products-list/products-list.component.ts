import { Component, inject } from '@angular/core';
import { Product } from '../../models/product.model';
import { ProductService } from '../../services/product.service';
import { MatCardModule } from '@angular/material/card';
import { ToastrService } from 'ngx-toastr';
import { CurrencyPipe } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { CartService } from '../../services/cart.service';
import { CartItem } from '../../models/cart-item.model';

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [ MatCardModule, CurrencyPipe, MatButtonModule ],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css'
})
export class ProductsListComponent {
  private productSvc = inject(ProductService)
  private cartSvc = inject(CartService)

  productsList: Product[] = []

  ngOnInit() {
    this.productSvc.getProducts().subscribe({
      next: (data) => this.productsList = data,
      //error: (err) => this.toastr.error(err)
    })

  }

  addToCart(product: Product){
     let newitem = new CartItem(product.id, product.name, product.price,1)
     this.cartSvc.addCartItem(newitem)
  }

}
