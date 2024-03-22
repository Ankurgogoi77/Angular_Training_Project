import { Component, inject } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { ToastrService } from 'ngx-toastr';
import { Product } from '../../models/product.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-manage-products',
  standalone: true,
  imports: [ FormsModule ],
  templateUrl: './manage-products.component.html',
  styleUrl: './manage-products.component.css'
})
export class ManageProductsComponent {
  private productSvc = inject(ProductService)
  private toastr = inject(ToastrService)

  mgProducts:Product[] = []
  frmProduct:Product = new Product(0, "", 0, "")

  ngOnInit() {
    this.getAllProducts()
  }

  getAllProducts(){
    this.productSvc.getProducts().subscribe({
      next: (data) => this.mgProducts = data,
      error: (err) => console.log("ERROR")
    })
  }

  save(){
    if(this.frmProduct.id==0){
      //add product
      this.productSvc.addProduct(this.frmProduct).subscribe({
        next: (data) => {
          this.toastr.success("Add Product Success")
          this.getAllProducts()
        },
        error: (err) => this.toastr.error("Product Not Added", err)
      })
    }
    else{
      //update product
      this.productSvc.updateProduct(this.frmProduct).subscribe({
        next: (data) => {
          this.getAllProducts()
          this.toastr.success("Product Updated")
        },
        error: (err) => this.toastr.error("Product Not Updated", err)
      })
    }
    this.frmProduct = new Product(0, "", 0, "")
  }

  view(product: Product){
    //this.frmProduct = product
    Object.assign(this.frmProduct, product)
  }

  delete(id: number){
    this.productSvc.deleteProduct(id).subscribe({
      next: (data) => {
        this.getAllProducts()
        this.toastr.success("Product Deleted")
      },
      error: (err) => this.toastr.error("Product Not Deleted", err)
    })
    this.frmProduct = new Product(0, "", 0, "")
  }

}
