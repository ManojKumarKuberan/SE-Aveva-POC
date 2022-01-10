import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../guard/authGuard/auth.guard';
import { ProductsResolverService } from '../service/products-resolver/products-resolver.service';
import { CustHomePageComponent } from './cust-home-page/cust-home-page.component';

const routes: Routes = [
  { path: '', component: CustHomePageComponent, canActivate: [AuthGuard], resolve: { products: ProductsResolverService } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerPageRoutingModule { }
