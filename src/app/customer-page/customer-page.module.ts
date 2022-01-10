import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerPageRoutingModule } from './customer-page-routing.module';
import { ProductsComponent } from './products/products.component';
import { CustHomePageComponent } from './cust-home-page/cust-home-page.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { TextareaAutosizeDirective } from '../directives/textareaAutosizeDirective/textarea-autosize.directive';
import { FormsModule } from '@angular/forms';
import { RatingPipe } from '../pipe/ratingPipe/rating.pipe';
import { DisplayOrNotDirective } from '../directives/displayOrNot/display-or-not.directive';


@NgModule({
  declarations: [
    ProductsComponent,
    CustHomePageComponent,
    FeedbackComponent,
    TextareaAutosizeDirective,
    DisplayOrNotDirective,
    RatingPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    CustomerPageRoutingModule
  ]
})
export class CustomerPageModule { }
