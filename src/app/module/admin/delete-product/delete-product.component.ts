import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from 'src/app/utils/service/productService/product.service';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.scss']
})
export class DeleteProductComponent implements OnInit {

  deleteProductForm: FormGroup;
  titles: Array<{ id: any; title: any; }> = []

  constructor(private fb: FormBuilder, private productService: ProductService) { }

  ngOnInit(): void {

    setTimeout(() => {
      this.productService.getProducts().subscribe((data: any) => {
        data.forEach((element: any) => {
          const temp = { id: element.id, title: element.title };
          this.titles.push(temp)
        });
      })
    }, 0)

    this.deleteProductForm = this.fb.group({
      title: ['', Validators.required],
    });
  }

  onSubmit(form: FormGroup) {
    const id = form.value.title;
    this.productService.deleteProduct(id).subscribe((data: any) => {
      console.log('Product Deleted', data)
      let index = this.titles.findIndex(d => d.id === id); 
      this.titles.splice(index, 1);
    })
  }

}
