import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerPageRoutingModule } from './customer-page-routing.module';
import { ProductsComponent } from './products/products.component';
import { CustHomePageComponent } from './cust-home-page/cust-home-page.component';
import { FeedbackComponent } from './feedback/feedback.component';

import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';

import { TextareaAutosizeDirective } from 'src/app/utils/directives/textareaAutosizeDirective/textarea-autosize.directive';
import { SearchPipe } from 'src/app/utils/pipe/search/search.pipe';
import { FilterPipe } from 'src/app/utils/pipe/filterPipe/filter.pipe';
import { CommonsModule } from 'src/app/commons/commons.module';

@NgModule({
  declarations: [
    ProductsComponent,
    CustHomePageComponent,
    FeedbackComponent,
    TextareaAutosizeDirective,
    SearchPipe,
    FilterPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    CommonsModule,
    CustomerPageRoutingModule,
    NgSelectModule
  ]
})
export class CustomerPageModule { }
