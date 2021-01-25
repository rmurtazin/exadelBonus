import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  TOKEN_KEY = 'token_key';
  isAuthenticated = false;
  constructor(private router: Router) { }

  whatRole(): string{
    return 'admin';
  }

  saveToken(token: string): void{
    window.localStorage.removeItem(this.TOKEN_KEY);
    window.localStorage.setItem(this.TOKEN_KEY, token);
  }

  getToken(): string{
    return localStorage.getItem(this.TOKEN_KEY);
  }

  checkAuthentication(): boolean{
    if (this.getToken() === 'test') {
      this.isAuthenticated = true;
    }
    return this.isAuthenticated;
  }

  logout(): void{
    this.isAuthenticated = false;
    window.localStorage.clear();
    this.router.navigate(['']);
  }

}
