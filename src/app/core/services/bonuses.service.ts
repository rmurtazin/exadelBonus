import { Injectable } from '@angular/core';
import { IBonus } from '@interfaces/bonus.interface';
import {from, Observable, Subject} from 'rxjs';
import { of } from 'rxjs';
import { ApiService } from '@services/api.service';
import { INewBonus } from '@interfaces/add-bonus.interface';
import { ToasterService } from './toaster.service';
import { map, catchError } from 'rxjs/operators';
import { apiLinks } from './constants';
import * as bonuses from 'src/assets/static/bonuses.json';
import { delay } from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class BonusesService {
  public bonusSubject = new Subject<IBonus[]>();
  private bonusUrl = apiLinks.bonus;
  private citiesUrl = apiLinks.cities;
  private tagsUrl = apiLinks.tags;

  constructor(private api: ApiService, private toasterService: ToasterService, private http: HttpClient) {}

  public getBonuses(query?: string): Observable<IBonus[]> {
    const kek = from([bonuses[1]]).pipe(map(
      data => {
        this.bonusSubject.next([bonuses[1], bonuses[2], bonuses[3], bonuses[4]]);
        return [bonuses[1], bonuses[2]];
      }));
    kek.subscribe(data => console.log(data));
    return kek;
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
    return this.api
      .post(`${this.bonusUrl}`, JSON.stringify(newBonus))
      .pipe(
        catchError(async () =>
          this.toasterService.showNotification('addBonus.notification.saveBonusError', 'error'),
        ),
      );
  }

  public removeBonus(id: number): Observable<void> {
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
