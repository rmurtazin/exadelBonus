import { HttpErrorResponse, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { LoginService } from './login.service';
import { ToasterService } from './toaster.service';

@Injectable()
export class AuthInterceptor {
  constructor(
    private login: LoginService,
    private router: Router,
    private toastr: ToasterService,
  ) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    request = request.clone({
      setParams: {
        auth: this.login.getToken(),
      },
    });

    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        console.log('Error: ', error);
        if (error.status === 401) {
          this.toastr.showError(
            'The User Name or Password entered is incorrect.  Please try again.',
            'Error',
          );
        }
        return throwError(error);
      }),
    );
  }
}
