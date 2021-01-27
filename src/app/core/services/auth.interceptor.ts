import { HttpErrorResponse, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { AuthService } from './auth.service';
import {catchError} from 'rxjs/operators';

@Injectable()
export class AuthInterceptor {
  constructor(
    private auth: AuthService, // add AuthService
    private router: Router
  ) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    // add check authentication to AuthService
    request = request.clone({
      setParams: {
        // add getToken() to AuthService
        //auth: this.auth.getToken()
      }
    });

    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        console.log('Error: ', error)
        if (error.status === 401) {
          console.log('Unauthorized Error')
        }
        return throwError(error)
      })
    )
  }

}
