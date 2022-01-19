import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './utils/guard/authGuard/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./module/home/home-page.module').then(m => m.HomePageModule) },
  { path: 'customer', loadChildren: () => import('./module/customer/customer-page.module').then(m => m.CustomerPageModule), canActivate: [AuthGuard] },
  { path: 'admin', loadChildren: () => import('./module/admin/admin-page.module').then(m => m.AdminPageModule), canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
