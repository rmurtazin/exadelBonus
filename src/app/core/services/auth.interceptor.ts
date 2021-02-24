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
          'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJiY2EzMTMwZC03MmVhLTQxNzctOTMzNC0xMTJkYzQ5OGFkNzgiLCJleHAiOjE2MTQxNzE3MzcsImVtYWlsIjoiTWFyaWFAZ21haWwuY29tIiwiYXVkIjoiaHR0cHM6Ly9sb2NhbGhvc3QiLCJpYXQiOjE2MTQxNzE3MzcsInJvbGUiOlsiQWRtaW4iXX0.fiDoiwdeft1dTs3R231tsgpl9jbTPiTdMDc0bumg1SkCL47RTNhdG0wZyptqmXP0pjzfUeJZT_vP0KRa-IlH8Q',
      },
    });
    return next.handle(request);
  }
}
