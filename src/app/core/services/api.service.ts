import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { IBonus, IOffice } from "interfaces/index";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable()
export class ApiService{
    constructor(private http: HttpClient){}

    getBonuses(): Observable<IBonus[]> {
        return this.http.get('assets/data/bonuses.json').pipe(
            map((response: any) => {
                const bonusesList = response['data'];
                return bonusesList;
            })
        );
    }

    getOffices(): Observable<IOffice[]> {
        return this.http.get('assets/data/offices.json').pipe(
            map((response: any) => {
                const offices = response['offices'];
                return offices;
            }),
        );
    }
}