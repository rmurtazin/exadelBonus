import { IBonus } from './bonus.interface';
import { IUserInfo } from './loginInterface';

export interface IHistoryReqBody {
  userId: string;
  bonusId: string;
}

export interface IHistoryBonus {
  id: string;
  userInfo: IUserInfo;
  bonus: IBonus;
  usegeDate: string;
  rating: number;
}
