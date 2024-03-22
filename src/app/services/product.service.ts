import { Injectable, inject } from '@angular/core';
import { DataService } from './data.service';
import { map } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private ds = inject(DataService)
  private restUrl = " http://localhost:3000/wsproducts"

  getProducts() {
    return this.ds.readData(this.restUrl).pipe(map((respdata) => respdata as Product[]))
  }

  addProduct(newproduct:Product){
    return this.ds.createData(this.restUrl, newproduct).pipe(map((respdata) => respdata as Product[]))
  }

  updateProduct(modifiedproduct:Product){
    return this.ds.updateData(this.restUrl, modifiedproduct).pipe(map((respdata) => respdata as Product[]))
  }

  deleteProduct(id:number){
    return this.ds.deleteData(this.restUrl, id)
  }
}
