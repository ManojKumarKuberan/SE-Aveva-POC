import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  url = 'https://fakestoreapi.com/products';

  constructor(public http: HttpClient) { }

  getProducts() {
    return this.http.get(this.url);
  }

  addProduct(product: any) {
    return this.http.post(this.url, JSON.stringify(product))
  }

  deleteProduct(id: any) {
    return this.http.delete(this.url + '/' + id)
  }

  egtAllCategories() {
    return this.http.get(this.url + '/categories')
  }

}
