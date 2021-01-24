import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { IRequestedUser } from "interfaces/.";
import { Observable, of } from "rxjs";
import { catchError, tap} from 'rxjs/operators';

@Injectable()
export class AuthService{
    constructor(private httpClient: HttpClient){}

    login(email: string, password: string): Observable<any>{
        const url = 'http://localhost:3000/';
        return this.httpClient.post<IRequestedUser>(url, {email,password}).pipe(
            tap(user => this.doLogin(user)),
            catchError( _ => of('something went wrong')),
        );
    };

    doLogin(user: IRequestedUser){
        console.log(user);
        localStorage.setItem('accessToken', user.accessToken);
        localStorage.setItem('firstName', user.firstName);
        localStorage.setItem('role', user.role);
        localStorage.setItem('defaultLatitude', '' + user.office.latitude);
        localStorage.setItem('defaultLongitude', '' + user.office.longitude);
    }

    logout(){
        localStorage.clear();
    }

    isLogined = () => !!localStorage.getItem('accessToken');
}