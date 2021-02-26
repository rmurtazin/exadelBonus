import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
  CanLoad,
  Route,
} from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './../services/login.service';

@Injectable({
  providedIn: 'root',
})

export class AuthGuard implements CanActivate, CanLoad {
  constructor(private loginService: LoginService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (!this.loginService.getToken()) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }

  canLoad(route : Route): boolean {  
    const userRole = this.loginService.getRole();
    if (route.data.roles.includes(userRole)) {
      return true;
    }
    this.router.navigate(['404']);
    return false;
  }
}
