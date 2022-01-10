import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { DisplayOrNotDirective } from 'src/app/directives/displayOrNot/display-or-not.directive';

@Component({
  selector: 'app-cust-home-page',
  templateUrl: './cust-home-page.component.html',
  styleUrls: ['./cust-home-page.component.scss']
})
export class CustHomePageComponent implements OnInit {

  products: any;
  subPage: any;
  rated: any;
  subscription: Subscription;

  @ViewChild(DisplayOrNotDirective)
  displayOrNotDirective: DisplayOrNotDirective;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.subPage = 'home';
    this.subscription = this.activatedRoute.data.subscribe((response: any) => {
      this.products = response.products;
    });
  }

  route(url: string) {
    this.subPage = url;
  }

  back() {
    this.router.navigate(['/']);
  }

  yourRating(rating: any) {
    this.rated = rating.rating;
    this.displayOrNotDirective.display();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
