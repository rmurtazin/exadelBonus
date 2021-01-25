import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { ILoginValues, IToken } from '../interfaces/loginInterface';

@Injectable({ providedIn: 'root' })
export class LoginService {
  private tokenSubject: BehaviorSubject<any> = new BehaviorSubject<IToken>(JSON.parse(localStorage.getItem('token')));
  private token: Observable<IToken> = this.tokenSubject.asObservable(); //must return token

  constructor(private http: HttpClient) {}

  // get current token
  public getToken(): boolean {
    return this.tokenSubject.getValue();
  }

  public onLogin(userInput: ILoginValues): Observable<any> {
    // here will be function like this.http.post('authApiUrl', userInput)...
    return this.http.get('../../../assets/static/activeUserToken.json').pipe(
      map((token) => {
        localStorage.setItem('token', JSON.stringify(token));
        this.tokenSubject.next(token);
        return token;
      })
    );
  }

  public onlogout(): void {
    localStorage.removeItem('token');
    this.tokenSubject.next(null);
  }
}
