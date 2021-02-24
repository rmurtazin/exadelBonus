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
        Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJiY2EzMTMwZC03MmVhLTQxNzctOTMzNC0xMTJkYzQ5OGFkNzgiLCJleHAiOjE2MTQxNjQ2ODMsImVtYWlsIjoiTWFyaWFAZ21haWwuY29tIiwiYXVkIjoiaHR0cHM6Ly9sb2NhbGhvc3QiLCJpYXQiOjE2MTQxNjQ2ODMsInJvbGUiOlsiQWRtaW4iXX0.t9VAPtLYfxDodRRX48IedmWgva4ZLToPLdI_ByMA6B8kil_8UctCaiJf2ql4xFEtotL1RgrSy5MeUJd4v0cL5A'
      }
    });
    return next.handle(request);
  }
}
