import { Injectable } from '@angular/core';
import { IBonus } from '@interfaces/bonus.interface';
import { Observable } from 'rxjs';
import { ApiService } from '@services/api.service';

@Injectable()
export class BonusesService{
    constructor(private api: ApiService){}

    public getBonuses(): Observable<IBonus[]> {
        return this.api.get('assets/static/bonuses.json');
    }
}
