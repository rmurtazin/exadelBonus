import { Injectable } from '@angular/core';
import { IBonus } from '@interfaces/bonus.interface';
import { Observable, Subject } from 'rxjs';
import { of } from 'rxjs';
import { ApiService } from '@services/api.service';
import { INewBonus } from '@interfaces/add-bonus.interface';
import { ToasterService } from './toaster.service';
import { map, catchError } from 'rxjs/operators';
import { apiLinks } from './constants';
import * as bonuses from 'src/assets/static/bonuses.json';
import { delay } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class BonusesService {
  public bonusSubject = new Subject<IBonus[]>();

  constructor(private api: ApiService, private toasterService: ToasterService) {}

  private url = apiLinks.bonus;

  public getBonuses(query?: string): Observable<IBonus[]> {
    return this.api.get(this.url, query).pipe(
      map((data) => {
        this.bonusSubject.next(data.value);
        return data.value;
      }),
    );
  }

  public addBonus(newBonus: INewBonus): Observable<IBonus> {
    return this.api
      .post(`${this.url}`, JSON.stringify(newBonus))
      .pipe(
        catchError(async (err) =>
          this.toasterService.showNotification( 'addBonus.notification.saveBonusError', 'error'),
        ),
      );
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
    // return this.api.post(`${this.url}/${id}/rate`, {rating});
    return of(bonuses[1]).pipe(delay(1000));
  }
}
