import { Injectable } from '@angular/core';
import { IBonus } from '@interfaces/bonus.interface';
import { Observable, Subject } from 'rxjs';
import { BonusesService } from './bonuses.service';
import { orderByDefault } from './constants';
import { format } from 'date-fns';

interface IFilterQueryParams {
  order?: string;
  tags?: string[];
  city?: string;
  start?: string;
  end?: string;
  sortBy?: string;
}
@Injectable({ providedIn: 'root' })
export class FilterService {
  private queryParams: IFilterQueryParams = {};
  private bonusSubject = new Subject<IBonus[]>();
  constructor(private bonuses: BonusesService) {}

  private applyFilterEvent(filteredBonuses: IBonus[]): void {
    this.bonusSubject.next(filteredBonuses);
  }

  public filterAppliedObserver(): Observable<IBonus[]> {
    return this.bonusSubject.asObservable();
  }

  private sendFilterBonusRequest(): void {
    const newQueryString = this.buildLink();
    this.bonuses.getBonuses(newQueryString).subscribe((bonuses: IBonus[]) => {
      this.applyFilterEvent(bonuses);
    });
  }

  public addTagsToQuery(tags: string[]): void {
    this.queryParams.tags = tags;
    this.sendFilterBonusRequest();
  }

  public addCityToQuery(city: string): void {
    this.queryParams.city = city;
    this.sendFilterBonusRequest();
  }

  public addDateToQuery(date: any): void {
    this.queryParams.start = date?.start && new Date(date.start).toLocaleString();
    this.queryParams.end = date?.end && new Date(date.end).toLocaleString();
    this.sendFilterBonusRequest();
  }

  public addSortToQuery(type: string): void {
    this.queryParams.sortBy = type;
    this.sendFilterBonusRequest();
  }

  private buildLink(): string {
    const queriesArray = [];
    if (this.queryParams?.order) {
      queriesArray.push(`order=${this.queryParams.order}`);
    }
    if (this.queryParams?.tags && this.queryParams.tags.length > 0) {
      queriesArray.push(`Tags=${this.queryParams.tags.join('&Tags=')}`);
    }
    if (this.queryParams?.city) {
      queriesArray.push(`City=${this.queryParams.city}`);
    }
    if (this.queryParams?.start) {
      const dateStart = format(new Date(this.queryParams.start), 'yyyy/MM/dd');
      queriesArray.push(`DateStart=${dateStart}`);
    }
    if (this.queryParams?.end) {
      const dateEnd = format(new Date(this.queryParams.end), 'yyyy/MM/dd');
      queriesArray.push(`DateEnd=${dateEnd}`);
    }
    queriesArray.push(`SortBy=${this.queryParams.sortBy || orderByDefault}`);
    const resultUrl = `?${queriesArray.join('&')}`;
    return encodeURI(resultUrl);
  }
}
