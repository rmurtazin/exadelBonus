import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ILogin, IUser } from '../interfaces/loginInterface';

@Injectable({ providedIn: 'root' })
export class LoginService {
  private currentUser: IUser = JSON.parse(localStorage.getItem('user'));

  constructor(private http: HttpClient) {}

  public getUser(): IUser | boolean {
    return true;
  }

  public getToken(): string | null {
    if (this.currentUser) {
      return JSON.parse(localStorage.getItem('user')).token;
    }
    return null;
  }

  public onLogin(userInput: ILogin): Observable<any> {
    // here will be function like this.http.post('authApiUrl', userInput)...
    return this.http.get('../../../assets/static/currentUser.json').pipe(
      tap((user) => {
        this.currentUser = user;
        localStorage.setItem('user', JSON.stringify(user));
        return user;
      })
    );
  }

  public onlogout(): void {
    localStorage.removeItem('user');
    this.currentUser = null;
  }

}
