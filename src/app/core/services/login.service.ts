import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ILogin, IUser } from '../interfaces/loginInterface';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class LoginService {
  private currentUser: IUser = JSON.parse(localStorage.getItem('user'));

  constructor(private http: HttpClient, private route: Router) {}

  public getUser(): IUser | null {
    return this.currentUser;
  }

  public getToken(): string | null {
    return localStorage.getItem('token');
  }

  public onLogin(userInput: ILogin): Observable<any> {
    // here will be function like this.http.post('authApiUrl', userInput)...
    return this.http.get('../../../assets/static/currentUser.json').pipe(
      tap((user) => {
        this.currentUser = user;
        localStorage.setItem('token', this.currentUser.token);
        return user;
      }),
    );
  }

  public logout(): void {
    localStorage.clear();
    this.route.navigate(['login']);
  }

  public getRole(): string {
    // TODO: rewrite after integration with back
    // return this.getUser().role;
    return 'admin';
  }
}
