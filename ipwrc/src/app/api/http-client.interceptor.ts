import { Injectable, Inject } from '@angular/core';
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
    @Inject('URL_API_BASE') private baseUrl: string) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const apiReq = request.clone({
      url: `${this.baseUrl}/${request.url}`,
      headers: request.headers.set('token', this.authService.getToken())
    });
    return next.handle(apiReq);
  }
}