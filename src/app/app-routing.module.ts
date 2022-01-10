import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home-page/home-page.module').then(m => m.HomePageModule) },
  { path: 'customer', loadChildren: () => import('./customer-page/customer-page.module').then(m => m.CustomerPageModule) },
  { path: 'admin', loadChildren: () => import('./admin-page/admin-page.module').then(m => m.AdminPageModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
