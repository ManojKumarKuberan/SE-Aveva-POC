import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, OnChanges {
  @Input() products: any;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['previousValue'] !== changes['currentValue']) {
      location.reload();
    }
  }

  ngOnInit(): void {
  }

}
