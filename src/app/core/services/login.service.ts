import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, Subject, throwError } from 'rxjs';
import { map, take, tap, catchError } from 'rxjs/operators';
import { ILogin, IUser } from '@interfaces/loginInterface';
import { IJwtPayload } from '@interfaces/jwt.interface';
import { Router } from '@angular/router';
import { apiLinks } from './constants';
import decode from 'jwt-decode';

@Injectable({ providedIn: 'root' })
export class LoginService {
  public error$ = new Subject<boolean>();
  private currentUser: IUser;
  private loginUrl = apiLinks.account.login;
  private logoutUrl = apiLinks.account.logout;
  private getInfoUrl = apiLinks.account.getInfo;


  constructor(
    private http: HttpClient,
    private route: Router,
  ) {}

  public getUser(): IUser | null {
    return this.currentUser;
  }

  public getToken(): string | null {
    return localStorage.getItem('token');
  }

  public onLogin(userInput: ILogin): Observable<any> {
    const body = {
      email: userInput.userLogin,
      password: userInput.userPassword
    };
    return this.http.post(this.loginUrl, body).pipe(
      tap((response: any) => {
        localStorage.setItem('token', response.value.value);
        this.setUser();
        return response;
      }),
      catchError(err => throwError(err))
    );
  }

  public logout(): Observable<any> {
    return this.http.post(this.logoutUrl, {}).pipe(
      tap((response) => {
        localStorage.removeItem('token');
        this.currentUser = null;
        return response;
      }),
      catchError((err) => {
        return err;
      })
    );
  }

  public getRole(): string {
    const tokenData: IJwtPayload = decode(localStorage.getItem('token'));
    const [role] = tokenData?.role;
    return role.toLowerCase();
  }

  public setUser(): void {
    this.http.get(this.getInfoUrl)
    .pipe(
      take(1),
      map((response: any) => {
        return response?.value?.value;
      })
    ).subscribe((user: IUser) => {
      this.currentUser = user;
    });
  }
}
