import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DisplayOrNotDirective } from '../utils/directives/displayOrNot/display-or-not.directive';
import { CardComponent } from './card/card.component';
import { RatingPipe } from '../utils/pipe/ratingPipe/rating.pipe';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    CardComponent,
    DisplayOrNotDirective,
    RatingPipe
  ],
  imports: [
    CommonModule
  ],
  exports : [
    HeaderComponent,
    FooterComponent,
    CardComponent
  ]
})
export class CommonsModule { }
