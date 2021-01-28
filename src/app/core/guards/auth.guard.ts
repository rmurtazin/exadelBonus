import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable, of } from 'rxjs';

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
        return false;
      }
      if (this.loginService.getUser() || true) {
        return this.router.createUrlTree(['home']);
      }


  }
  constructor( private loginService: LoginService, private router: Router){
  }

}
