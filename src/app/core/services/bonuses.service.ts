import { Injectable } from '@angular/core';
import { IBonus } from '@interfaces/bonus.interface';
import { Observable, Subject } from 'rxjs';
import { of } from 'rxjs';
import { ApiService } from '@services/api.service';
import { INewBonus } from '@interfaces/add-bonus.interface';
import { ToasterService } from './toaster.service';
import { map, catchError, tap } from 'rxjs/operators';
import { apiLinks } from './constants';
import * as bonuses from 'src/assets/static/bonuses.json';
import { delay } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class BonusesService {
  public bonusSubject = new Subject<IBonus[]>();
  private bonusUrl = apiLinks.bonus;
  private citiesUrl = apiLinks.cities;
  private tagsUrl = apiLinks.tags;

  constructor(private api: ApiService, private toasterService: ToasterService) {}

  public getBonuses(query?: string): Observable<IBonus[]> {
    return this.api.get(this.bonusUrl, query).pipe(
      map((data) => {
        this.bonusSubject.next(data.value);
        return data.value;
      }),
    );
  }

  public getBonus(id: string): Observable<IBonus> {
    return this.api.get(`${this.bonusUrl}/${id}`).pipe(map((data) => data.value));
  }

  public addBonus(newBonus: INewBonus): Observable<IBonus> {
    return this.api.post(`${this.bonusUrl}`, JSON.stringify(newBonus)).pipe(
      tap(() =>
        this.toasterService.showNotification('addBonus.notification.saveBonusSuccess', 'success'),
      ),
      catchError(async () =>
        this.toasterService.showNotification('addBonus.notification.saveBonusError', 'error'),
      ),
    );
  }

  public removeBonus(id: string): Observable<void> {
    return this.api.delete(`${this.bonusUrl}/${id}`);
  }

  public updateBonus(modifiedBonus: IBonus): Observable<IBonus> {
    return this.api.put(`${this.bonusUrl}/${modifiedBonus.id}`, {
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

  public rate(id: string, rating: number): Observable<any> {
    // return this.api.post(`${this.url}/${id}/rate`, {rating});
    return of(bonuses[1]).pipe(delay(1000));
  }

  public getBonusesCities(): Observable<string[]> {
    return this.api.get(this.citiesUrl).pipe(map((res) => res?.value));
  }

  public getBonusesTags(): Observable<string[]> {
    return this.api.get(this.tagsUrl).pipe(map((res) => res?.value));
  }
}
