import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoaderServiceService } from './utils/service/loaderService/loader-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy, AfterViewInit {
  title = 'AngularPOC';
  loading = true;
  subscription: Subscription;

  constructor(private loaderService: LoaderServiceService) { }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    this.loadingCheck();
  }

  ngAfterViewInit(): void {
    this.loadingCheck();
  }

  loadingCheck() {
    this.subscription = this.loaderService.isLoading.subscribe((isLoading) => {
      this.loading = isLoading;
    })
  }
}
