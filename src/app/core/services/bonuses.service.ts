import { Injectable } from '@angular/core';
import { IBonus } from '@interfaces/bonus.interface';
import { Observable, of, from } from 'rxjs';
import { ApiService } from '@services/api.service';
import { map } from 'rxjs/operators';
import { apiLinks } from './constants';
import * as bonuses from 'src/assets/static/bonuses.json';
import { delay } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class BonusesService {
  constructor(private api: ApiService) {}

  private url = apiLinks.bonus;

  public getBonuses(query?: string): Observable<IBonus[]> {
    // return this.api.get(this.url, query).pipe(map((data) => data.value));
    return from(Array(bonuses.default)).pipe(delay(1000));
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
      isActive: modifiedBonus.isActive,
      locations: modifiedBonus.locations,
      tags: modifiedBonus.tags,
    });
  }

  public rate(id: number, rating: number): Observable<any> {
    // TODO: change 'Observable<any>' to 'Observable<IBonus>' when using backend
    // return this.api.post(`${this.url}/${id}/rate`, {rating});
    return of(bonuses[1]).pipe(delay(1000));
  }
}
