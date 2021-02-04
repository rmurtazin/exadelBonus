import { Injectable } from '@angular/core';
import { IBonus } from '@interfaces/bonus.interface';
import { Observable } from 'rxjs';
import { ApiService } from '@services/api.service';

@Injectable({ providedIn: 'root' })
export class BonusesService{
    constructor(private api: ApiService){}

  url = '../../../assets/static/bonuses.json'; // TODO: change url

  public getBonuses(): Observable<IBonus[]> {
    return this.api.get(this.url);
  }

  public addBonus(newBonus: IBonus): Observable<IBonus> {
    return this.api.post(this.url, newBonus);
  }

  public removeBonus(id: number): Observable<void> {
    return this.api.delete(`${this.url}/${id}`);
  }

  public updateBonus(modifiedBonus: IBonus): Observable<IBonus> {
    return this.api.put(`${this.url}/${modifiedBonus.id}`, {
      dateStart: modifiedBonus.dateStart,
      dateEnd: modifiedBonus.dateEnd,
      description: modifiedBonus.description,
      company: modifiedBonus.company,
      type: modifiedBonus.type,
      rating: modifiedBonus.rating,
      discount: modifiedBonus.discount,
      locations: modifiedBonus.locations,
      tags: modifiedBonus.tags,
    });
  }
}
