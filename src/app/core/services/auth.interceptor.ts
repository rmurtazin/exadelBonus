import { HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';

@Injectable()
export class AuthInterceptor {
  constructor(private login: LoginService, private router: Router) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.login.getToken();
    request = request.clone({
      setHeaders: {
        ...(token ? {Authorization: `Bearer ${this.login.getToken()}`} : {})
      }
    });
    return next.handle(request);
  }
}

