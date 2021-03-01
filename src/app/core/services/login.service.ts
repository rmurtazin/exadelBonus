import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { map, take, tap, catchError } from 'rxjs/operators';
import { ILogin, IUser } from '@interfaces/loginInterface';
import { Router } from '@angular/router';
import { apiLinks } from './constants';
import jwt_decode from 'jwt-decode';
import { IJwtDecoded } from '@interfaces/jwt-decoded.interface';

@Injectable({ providedIn: 'root' })
export class LoginService {
  private loginUrl = apiLinks.account.login;
  private logoutUrl = apiLinks.account.logout;
  private getInfoUrl = apiLinks.account.getInfo;
  private refreshTokenUrl = apiLinks.account.refreshToken;

  constructor(private http: HttpClient, private route: Router) {}

  public getToken(): string | null {
    return localStorage.getItem('accessToken');
  }

  public getRole(): string {
    const token = this.getToken();
    if (token) {
      const jwtDecoded: IJwtDecoded = jwt_decode(token);
      const [role] = jwtDecoded.role;
      return role.toLowerCase();
    }
    return null;
  }

  public onLogin(userInput: ILogin) {
    const body = {
      email: userInput.userLogin,
      password: userInput.userPassword,
    };
    return this.http.post(this.loginUrl, body).pipe(
      tap((response: any) => {
        localStorage.setItem('accessToken', response.value.accessToken);
        localStorage.setItem('refreshToken', response.value.refreshToken);
        this.getUser();
        return response;
      }),
      catchError((err) => throwError(err)),
    );
  }

  public logout(): Observable<any> {
    if (this.getToken()) {
      return this.http.post(this.logoutUrl, {}).pipe(
        tap((response) => {
          localStorage.clear();
          return response;
        }),
        catchError((err) => {
          localStorage.clear();
          return throwError(err);
        }),
      );
    }
    localStorage.clear();
    return of(null);
  }

  public getUser(): Observable<IUser> {
    return this.http.get(this.getInfoUrl).pipe(
      take(1),
      map((response: { value: IUser }) => {
        return response.value;
      }),
      catchError((err: HttpErrorResponse) => {
        if (err.status === 401) {
          this.logout();
          this.route.navigate(['login']);
        }
        return throwError(err);
      }),
    );
  }

  public refreshToken(): Observable<any> {
    const refreshToken = `${localStorage.getItem('refreshToken')}`;
    return this.http.post(
      `${this.refreshTokenUrl}?refreshToken=${encodeURIComponent(refreshToken)}`,
      {},
    );
  }
}
