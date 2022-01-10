import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

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
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
