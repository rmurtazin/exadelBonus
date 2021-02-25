import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
  CanActivateChild,
} from '@angular/router';
import { Observable, of } from 'rxjs';

import { LoginService } from './../services/login.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate, CanActivateChild {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (!this.loginService.getToken()) {
      this.router.navigate(['login']);
      return false;
    }
    if (this.loginService.getUser()) {
      return true;
    }
  }

  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.loginService.getUser()) {
      const userRole = this.loginService.getRole();
      // console.log('userRole',userRole);
      // console.log(childRoute);
      // console.log(childRoute.data.roles.include('admin'));
      // TODO: rewrite after integration with back
      // return childRoute.data.roles.include(userRole);
      return true;
    }
    return false;
  }

  constructor(private loginService: LoginService, private router: Router) {}
}
