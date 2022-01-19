import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductService } from 'src/app/utils/service/productService/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  productForm: FormGroup;

  constructor(private fb: FormBuilder, private productService: ProductService) { }

  ngOnInit(): void {
    this.productForm = new FormGroup({
      title: new FormControl(''),
      price: new FormControl(''),
      description: new FormControl(''),
      image: new FormControl(''),
      category: new FormControl(''),
    });

    this.productForm = this.fb.group({
      title: ['', Validators.required],
      price: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
      description: ['', Validators.required],
      image: ['', [Validators.required, Validators.pattern('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?')]],
      category: ['', Validators.required],
    });
  }

  onSubmit(form: FormGroup) {
    // const temp = {
    //   title: 'test product',
    //   price: 13.5,
    //   description: 'lorem ipsum set',
    //   image: 'https://i.pravatar.cc',
    //   category: 'electronic'
    // };

    const result = this.productService.addProduct(form.value);
    result.subscribe((data: any) => {
      console.log('Product Added Successfully', data.id)

      /** Delete the created Product **/
      // const result2 = this.productService.deleteProduct(data.id);
      // result2.subscribe((data: any) => {
      //   console.log('Product Deleted')
      // })

      this.productForm.reset();
    })
  }

  cancel() {
    this.productForm.reset();
  }

}
