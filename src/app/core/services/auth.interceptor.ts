import { HttpErrorResponse, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { LoginService } from './login.service';
import { catchError, switchMap, map, finalize, filter, take } from 'rxjs/operators';

@Injectable()
export class AuthInterceptor {
  private isTokenRefreshing = false;
  private tokenSubject = new BehaviorSubject<string | null>(null);
  private loginService: LoginService;

  constructor(private injector: Injector) {
    this.loginService = this.injector.get(LoginService);
  }

  public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    req = this.injectToken(req);
    return next.handle(req).pipe(catchError((err) => this.handleErrorResponse(err, req, next)));
  }

  private handleErrorResponse(
    error: HttpErrorResponse,
    req: HttpRequest<any>,
    next: HttpHandler,
  ): Observable<any> {
    if (error instanceof HttpErrorResponse) {
      switch (error.status) {
        case 400:
          return this.handle400Error(error);
        case 401:
          return this.handle401Error(req, next);
        default:
          return throwError(error);
      }
    }
    throw throwError(error);
  }

  private handle400Error(error: HttpErrorResponse): Observable<any> {
    this.loginService.logout();
    return throwError(error);
  }

  private handle401Error(req: HttpRequest<any>, next: HttpHandler): Observable<any> {
    if (!this.isTokenRefreshing) {
      //console.log(1);
      this.isTokenRefreshing = true;
      this.tokenSubject.next(null);
      return this.loginService.refreshToken().pipe(
        map((response: any) => {
          return response.value;
        }),
        switchMap((value: any) => {
          //console.log('3', value);
          if (value.accessToken) {
            localStorage.setItem('accessToken', value.accessToken);
            localStorage.setItem('refreshToken', value.refreshToken);
            return next.handle(this.injectToken(req));
          }
          this.loginService.logout();
          return throwError('not get token');
        }),
        catchError((error) => {
          this.loginService.logout();
          //console.log('4', error.status);
          return throwError(error);
        }),
        finalize(() => {
          this.isTokenRefreshing = false;
        }),
      );
    } else {
      this.tokenSubject.pipe(
        filter((token: string | null) => token !== null),
        take(1),
        switchMap((token: string) => {
          localStorage.setItem('accessToken', token);
          return next.handle(this.injectToken(req));
        }),
      );
      return throwError('this refreshing');
    }
  }

  private injectToken(req: HttpRequest<any>, newToken?: string | null): HttpRequest<any> {
    const token = localStorage.getItem('accessToken');
    return req.clone({
      setHeaders: {
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      },
    });
  }
}
