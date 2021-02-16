import { map } from 'rxjs/operators';
import { apiLinks } from './constants';
import { StatisticElement } from '@interfaces/statistics.interface';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StatisticsService {

  private url = apiLinks.bonus;

  constructor(private api: ApiService) {}

  public getStatistics(query?: string): Observable<StatisticElement[]> {
    return this.api.get(`${this.url}/statistic`, query).pipe(
      map((data) => data.value)
    );
  }
}
