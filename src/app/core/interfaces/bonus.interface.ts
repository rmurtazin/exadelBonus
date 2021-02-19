interface ILocation {
  latitude: number;
  longitude: number;
  city: string;
  country: string;
  address: string;
}

interface ICompany {
  id: string;
  name: string | null;
  email: string | null;
}

export interface IBonus {
  id: string;
  dateStart: Date | string;
  dateEnd: Date | string;
  description: string;
  phone: string;
  type: string;
  rating: number;
  isActive: boolean;
  locations: ILocation[];
  tags: string[];
  company: ICompany;
  title: string;
}
