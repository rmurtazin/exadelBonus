import { IBonus } from './bonus.interface';

export interface IHistoryReqBody {
  userId: string;
  bonusId: string;
}

export interface IHistoryBonus {
  id: string;
  userInfo: {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    city: string;
    phoneNumber: string;
  };
  bonus: IBonus;
  usegeDate: string;
  rating: number;
}
