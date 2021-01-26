import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  TOKEN_KEY = 'token_key';
  constructor(private router: Router) { }

  public whatRole(): string{
    return 'admin';
  }

  public saveToken(token: string): void{
    localStorage.removeItem(this.TOKEN_KEY);
    localStorage.setItem(this.TOKEN_KEY, token);
  }

  public getToken(): string{
    return localStorage.getItem(this.TOKEN_KEY);
  }

  public checkAuthentication(): boolean{
    return this.getToken() === 'test';
  }

  public logout(): void{
    localStorage.clear();
    this.router.navigate(['']);
  }

}
