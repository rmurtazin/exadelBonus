import { IBonus } from './bonus.interface';
import { IUserHistory } from './loginInterface';

export interface IHistoryReqBody {
  userId: string;
  bonusId: string;
}

export interface IHistoryBonus {
  id: string;
  userInfo: IUserHistory;
  bonus: IBonus;
  usegeDate: string;
  rating: number;
}
