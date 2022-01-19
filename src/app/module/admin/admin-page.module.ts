import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminPageRoutingModule } from './admin-page-routing.module';
import { AdminHomePageComponent } from './admin-home-page/admin-home-page.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DeleteProductComponent } from './delete-product/delete-product.component';


@NgModule({
  declarations: [
    AdminHomePageComponent,
    AddProductComponent,
    DeleteProductComponent
  ],
  imports: [
    CommonModule,
    AdminPageRoutingModule,
    ReactiveFormsModule
  ]
})
export class AdminPageModule { }
