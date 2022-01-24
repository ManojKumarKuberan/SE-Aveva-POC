import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, OnChanges {
  @Input() allProducts: any;
  products: any;

  searchFilter: any = '';
  query: any;
  productCategories = [];
  selectedCategory: any;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['previousValue'] !== changes['currentValue']) {
      location.reload();
    }

    this.loadLimitedProd(4);
    this.loadProdCategories();
  }

  ngOnInit(): void { }

  loadLimitedProd(length: number) {
    this.products = this.allProducts.slice(0, length);
  }

  loadProdCategories() {
    this.productCategories = this.products.map((prod: any) => prod.category);
    this.productCategories = [...new Set(this.productCategories)];
    this.selectedCategory = this.productCategories;
  }

  loadMoreProducts() {
    this.loadLimitedProd(this.products.length + 4);
    this.loadProdCategories();
  }

}
