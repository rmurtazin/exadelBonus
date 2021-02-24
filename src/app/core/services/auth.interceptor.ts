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
      setParams: {
        auth: this.login.getToken(),
      },
      setHeaders: {
        Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJiY2EzMTMwZC03MmVhLTQxNzctOTMzNC0xMTJkYzQ5OGFkNzgiLCJleHAiOjE2MTQxNjg5NDAsImVtYWlsIjoiTWFyaWFAZ21haWwuY29tIiwiYXVkIjoiaHR0cHM6Ly9sb2NhbGhvc3QiLCJpYXQiOjE2MTQxNjg5NDAsInJvbGUiOlsiQWRtaW4iXX0.4OqCrdoZpvwWq1euDv1kwiovQzRZ8q0RcOt07iRkJ5u6LED3yPL_hTCOdy41hqZuAWrrzeNKUxEVGf7gxr9-zA'
      }
    });
    return next.handle(request);
  }
}
