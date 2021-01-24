import { Injectable } from "@angular/core";
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from "@angular/router";
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthGuard implements CanActivate{
 
    constructor(
        private authService: AuthService,
        private router: Router    
    ){}
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : boolean{
        if(this.authService.isLogined()){
            return true;
        }
        this.router.navigate(['/login']);
        return false;
    }
}