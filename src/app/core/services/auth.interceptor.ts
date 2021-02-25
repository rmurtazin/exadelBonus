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
          'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJiY2EzMTMwZC03MmVhLTQxNzctOTMzNC0xMTJkYzQ5OGFkNzgiLCJleHAiOjE2MTQyNDc1NjYsImVtYWlsIjoiTWFyaWFAZ21haWwuY29tIiwiYXVkIjoiaHR0cHM6Ly9sb2NhbGhvc3QiLCJpYXQiOjE2MTQyNDc1NjYsInJvbGUiOlsiQWRtaW4iXX0.yY4KefJNjDUhy8rKHPo2JMc5Cx-kcLKfsWzNVl08UeBst1gtVFMLpUL7XETDjeh3BLyBIsdfAOdN_8YRd0yh1g',
      },
    });
    return next.handle(request);
  }
}
