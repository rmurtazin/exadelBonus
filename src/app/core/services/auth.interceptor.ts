import { HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';

@Injectable()
export class AuthInterceptor {
  constructor(private login: LoginService, private router: Router) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    request = request.clone({
      // setParams: {
      //   auth: this.login.getToken(),
      // },
      setHeaders: {
        Authorization:
          'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJiY2EzMTMwZC03MmVhLTQxNzctOTMzNC0xMTJkYzQ5OGFkNzgiLCJleHAiOjE2MTQxNzc5NDMsImVtYWlsIjoiTWFyaWFAZ21haWwuY29tIiwiYXVkIjoiaHR0cHM6Ly9sb2NhbGhvc3QiLCJpYXQiOjE2MTQxNzc5NDMsInJvbGUiOlsiQWRtaW4iXX0.G3WVCvWzcXh7NB00wzRFBbkWHO_jFtqQbrs7bbjbUJl8sYxzEitJ8IYO_zB3NTtPj_84zlB2SDg2kZe2IuK7gg',
      },
    });
    return next.handle(request);
  }
}
