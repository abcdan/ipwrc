import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthserviceService } from '../authentication/authservice.service';

@Injectable()
export class HttpClientInterceptor implements HttpInterceptor {
  constructor(
    private authService:AuthserviceService,
    @Inject('BASE_API_URL') private baseUrl: string) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const apiReq = request.clone({
      url: `${this.baseUrl}/${request.url}`,
      headers: request.headers.set('token', this.authService.getJWTToken())
    });
    return next.handle(apiReq);
  }

  
  // intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
  //   return next.handle(request);
  // }
}