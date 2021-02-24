import { map } from 'rxjs/operators';
import { apiLinks } from './constants';
import { StatisticElement } from '@interfaces/statistics.interface';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StatisticsService {
  private url = apiLinks.bonus;

  constructor(private api: ApiService) {}

  public getStatistics(query?: string): Observable<StatisticElement[]> {
    return this.api.get(`${this.url}/statistic`, query).pipe(map((data) => data.value));
  }

  public buildLink(filterParams: any): string {
    const queriesArray = [];
    if (filterParams.bonus !== '') {
      queriesArray.push(`Title=${filterParams.bonus}`);
    }
    if (filterParams.end !== '') {
      queriesArray.push(`DateEnd=${filterParams.end}`);
    }
    if (filterParams.isActive !== '') {
      queriesArray.push(`IsActive=${filterParams.isActive}`);
    }
    if (filterParams.start !== '') {
      queriesArray.push(`DateStart=${filterParams.start}`);
    }
    if (filterParams.type !== '') {
      queriesArray.push(`Type=${filterParams.type}`);
    }
    if (filterParams.vendor !== '') {
      queriesArray.push(`CompanyId=${filterParams.vendorId}`);
    }
    const resultUrl = `?${queriesArray.join('&')}`;
    return encodeURI(resultUrl);
  }
}
