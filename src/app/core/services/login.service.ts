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
    let jwtDecoded: IJwtDecoded;
    if (token) {
      try{
        jwtDecoded = jwt_decode(token);
      }
      catch (err){
        throwError(err);
        return null;
      }
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
        return response;
      }),
      catchError((err) => throwError(err)),
    );
  }

  public logout(): Observable<any> {
    if (this.getToken()) {
      return this.http.post(this.logoutUrl, {}).pipe(
        tap((response) => {
          this.route.navigate(['/login']);
          localStorage.clear();
          return response;
        }
        ),
        catchError((err) => {
          this.route.navigate(['/login']);
          localStorage.clear();
          return throwError(err);
        }),
      );
    }
    localStorage.clear();
    this.route.navigate(['/login']);
    return of(null);
  }

  public getUser(): Observable<IUser> {
    return this.http.get(this.getInfoUrl).pipe(
      take(1),
      map((response: { value: IUser }) => {
        return response.value;
      }),
      catchError((err: HttpErrorResponse) => {
        if (err.status === 401 || err.status === 400) {
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
