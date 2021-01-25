import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { ILoginValues } from './loginInterfaces';

@Injectable({ providedIn: 'root' })
export class LoginService {
  private tokenSubject: BehaviorSubject<any> = new BehaviorSubject<{token: string}>(
    JSON.parse(localStorage.getItem('user'))
  );
  private user: Observable<string> = this.tokenSubject.asObservable(); //must return token

  constructor(private http: HttpClient) {}

  // get current token
  public getToken(): boolean {
    return this.tokenSubject.getValue();
  }

  public onLogin(userInput: ILoginValues): Observable<any> {
    // here will be function like this.http.post('authApiUrl', userInput)...
    return this.http.get('../../../assets/static/activeUser.json').pipe(
      map((user) => {
        console.log('user', user);
        localStorage.setItem('user', JSON.stringify(user));
        this.userSubject.next(user);
        return user;
      })
    );
  }

  public onlogout(): void {
    localStorage.removeItem('user');
    this.userSubject.next(null);
  }
}
