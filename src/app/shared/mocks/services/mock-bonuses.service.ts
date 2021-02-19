import { IBonus } from '@interfaces/bonus.interface';
import { Observable } from 'rxjs';
import { BonusesService } from '../../../core/services/bonuses.service';
import { asyncData } from '../mock-async-observable';
import { expectedBonuses } from '../constants/mock-bonuses';

export const MockBonusesService: Partial<BonusesService> = {
  getBonuses(data?: string): Observable<IBonus[]> {
    return asyncData(expectedBonuses);
  },
};
