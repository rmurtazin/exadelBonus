import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { LoginService } from './../services/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (!this.loginService.getToken()) {
        this.router.navigate(['login']);
        return true;
      } 
      if (this.loginService.getUser()) {
        return true;
      } 
      return false;

  }
  constructor( private loginService: LoginService, private router: Router){
  }

}
