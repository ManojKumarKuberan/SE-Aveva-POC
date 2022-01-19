import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { finalize } from 'rxjs';
import { LoaderServiceService } from '../../service/loaderService/loader-service.service';

@Injectable()
export class LoaderInterceptorInterceptor implements HttpInterceptor {

  private totalRequests = 0;

  constructor(private loaderService: LoaderServiceService) { }

  intercept(req: HttpRequest<unknown>, next: HttpHandler) {
    console.log('LoaderInterceptorInterceptor')

    this.totalRequests++;
    this.loaderService.isLoading.next(true);

    return next.handle(req).pipe(
      finalize(() => {
        this.totalRequests--;
        if (this.totalRequests === 0) {
          this.loaderService.isLoading.next(false)
        }
      })
    )

    // this.loaderService.isLoading.next(true);
    // return next.handle(req).pipe(
    //   finalize(() => this.loaderService.isLoading.next(false))
    // );
  }
}
