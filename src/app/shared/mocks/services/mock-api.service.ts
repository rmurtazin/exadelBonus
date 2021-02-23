import { ApiService } from '@services/api.service';
import { Observable, of } from 'rxjs';
import { expectedBonuses } from '../constants/bonuses';

export const MockApiService: Partial<ApiService> = {
  get(url: string): Observable<object> {
    const bonuses = of({ value: expectedBonuses });
    return bonuses;
  },
  delete(url: string): Observable<object> {
    const error = of({ value: 'bonus was deleted' });
    return error;
  },
};
