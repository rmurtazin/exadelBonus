import { IBonus } from './bonus.interface';

export interface IHistoryReqBody {
  userId: string;
  bonusId: string;
}

export interface IHistoryBonus {
  bonusDto: IBonus;
  usegeDate: string;
  rating: number;
  historyId: string;
}
