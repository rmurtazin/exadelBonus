import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ILoginValues, IUserActive } from '../interfaces/auth';

@Injectable({ providedIn: 'root' })
export class AuthServices {
  private userSubject: BehaviorSubject<any>;
  public user: Observable<IUserActive>;

  constructor(private http: HttpClient) {
    this.userSubject = new BehaviorSubject<IUserActive>(
      JSON.parse(localStorage.getItem('user'))
    );
    this.user = this.userSubject.asObservable();
  }

  public getUserValue(): IUserActive {
    return this.userSubject.getValue();
  }

  public getToken(): string {
    return this.userSubject.getValue().token;
  }

  public isAuth(): boolean {
    return !!this.userSubject.getValue().token;
  }

  public onLogin(userInput: ILoginValues): Observable<any> {
    return this.http.get('../../../assets/static/activeUser.json').pipe(
      tap((user) => {
        localStorage.setItem('user', JSON.stringify(user));
        this.userSubject.next(user);
        return user;
      })
    );
  }

  public onlogout() {
    localStorage.removeItem('user');
    this.userSubject.next(null);
  }
}
