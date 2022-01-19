import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerPageRoutingModule } from './customer-page-routing.module';
import { ProductsComponent } from './products/products.component';
import { CustHomePageComponent } from './cust-home-page/cust-home-page.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { FormsModule } from '@angular/forms';
import { TextareaAutosizeDirective } from 'src/app/utils/directives/textareaAutosizeDirective/textarea-autosize.directive';
import { DisplayOrNotDirective } from 'src/app/utils/directives/displayOrNot/display-or-not.directive';
import { RatingPipe } from 'src/app/utils/pipe/ratingPipe/rating.pipe';


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
