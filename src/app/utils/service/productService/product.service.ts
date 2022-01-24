import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  protected baseApiUrl = environment.baseWebApiUrl + 'products';

  constructor(public http: HttpClient) { }

  getProducts() {
    return this.http.get(this.baseApiUrl);
  }

  addProduct(product: any) {
    return this.http.post(this.baseApiUrl, JSON.stringify(product))
  }

  deleteProduct(id: any) {
    return this.http.delete(this.baseApiUrl + '/' + id)
  }

  getAllCategories() {
    return this.http.get(this.baseApiUrl + '/categories')
  }

}
