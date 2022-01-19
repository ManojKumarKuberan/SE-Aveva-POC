import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsResolverService } from 'src/app/utils/service/products-resolver/products-resolver.service';
import { CustHomePageComponent } from './cust-home-page/cust-home-page.component';

const routes: Routes = [
  { path: '', component: CustHomePageComponent, resolve: { products: ProductsResolverService } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerPageRoutingModule { }
