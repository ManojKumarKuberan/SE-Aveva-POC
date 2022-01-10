import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { catchError, of } from 'rxjs';
import { ProductService } from '../productService/product.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsResolverService implements Resolve<any> {

  constructor(private product: ProductService) { }

  resolve() {
    return this.product.getProducts().pipe(
      catchError(error => {
        return of('No data', error);
      })
    );

  }
}
