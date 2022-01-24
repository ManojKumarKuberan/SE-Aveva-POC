import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageRoutingModule } from './home-page-routing.module';
import { HomeComponent } from './home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PasswordDirective } from 'src/app/utils/directives/password/password.directive';
import { PhoneMaskDirective } from 'src/app/utils/directives/phoneMask/phone-mask.directive';


@NgModule({
  declarations: [
    HomeComponent,
    PasswordDirective,
    PhoneMaskDirective
  ],
  imports: [
    CommonModule,
    HomePageRoutingModule,
    ReactiveFormsModule
  ]
})
export class HomePageModule { }
