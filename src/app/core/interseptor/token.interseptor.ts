import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthServices } from '../services/auth.service';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private authServices: AuthServices) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (this.authServices.isAuth()) {
      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${this.authServices.getToken()}`,
        },
      });
    }
    return next.handle(req);
  }
}
