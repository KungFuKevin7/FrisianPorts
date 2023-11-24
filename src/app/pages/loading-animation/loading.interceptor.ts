import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import {finalize, Observable} from 'rxjs';
import {LoadingService} from "../../services/loading-service/loading.service";

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {

  private totalRequests = 0;

  constructor(private loadService : LoadingService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.totalRequests++;
    this.loadService.setStatus(true);
    return next.handle(request).pipe(
      finalize(()=> {
        this.totalRequests--;
        if (this.totalRequests == 0){
          this.loadService.setStatus(false);      //console.log("Done Loading");
        }
      })
    );
  }
}
