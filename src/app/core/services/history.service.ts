import { Injectable } from '@angular/core';
import { IHistoryBonus, IHistoryReqBody } from '@interfaces/history.interface';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { ApiService } from './api.service';
import { apiLinks } from './constants';
import { ToasterService } from './toaster.service';

@Injectable({
  providedIn: 'root',
})
export class HistoryService {
  private url = apiLinks.history;

  constructor(private apiService: ApiService, private toasterService: ToasterService) {}

  public applyBonus(reqBody: IHistoryReqBody): Observable<IHistoryBonus> {
    return this.apiService.post(this.url, JSON.stringify(reqBody)).pipe(
      tap(() =>
        this.toasterService.showNotification('history.notification.applySuccess', 'success'),
      ),
      catchError(async () =>
        this.toasterService.showNotification('history.notification.applyError', 'error'),
      ),
    );
  }

  public getHistoryBonuses(userId: string): Observable<IHistoryBonus[]> {
    return this.apiService.get(`${this.url}/user/${userId}/withoutrepetitions`).pipe(
      map(({ value }) => {
        return value;
      }),
    );
  }

  public rateBonus(historyId: string, estimate: number): Observable<IHistoryBonus> {
    return this.apiService.put(`${this.url}/estimate/${historyId}?estimate=${estimate}`).pipe(
      map((data) => data.value),
      tap(() => {
        this.toasterService.showNotification('rateForm.notification.success', 'success');
      }),
    );
  }
}
