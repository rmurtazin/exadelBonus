import { Injectable } from '@angular/core';
import { IBonus } from '@interfaces/bonus.interface';
import { Observable } from 'rxjs';
import { ApiService } from '@services/api.service';

@Injectable()
export class BonusesService{
    constructor(private api: ApiService){}

    url = 'assets/static/bonuses.json'; // TODO: change url

    public getBonuses(): Observable<IBonus[]> {
        return this.api.get(this.url);
    }

    public addBonus(newBonus: IBonus): Observable<IBonus> {
      return this.api.post(this.url, newBonus);
    }

    public removeBonus(id: number): Observable<void> {
      return this.api.delete(`${this.url}/${id}`);
    }

    public changeBonus(chBonus: IBonus): Observable<IBonus> {
      return this.api.put(`${this.url}/${chBonus.id}`, {
        dateStart: chBonus.dateStart,
        dateEnd: chBonus.dateEnd,
        description: chBonus.description,
        company: chBonus.company,
        type: chBonus.type,
        rating: chBonus.rating,
        discount: chBonus.discount,
        locations: chBonus.locations,
        tags: chBonus.tags
      });
    }
}
