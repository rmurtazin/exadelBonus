interface ILocation {
  latitude: number;
  longitude: number;
  city: string;
  country: string;
  address: string;
}

interface ICompany {
  name: string;
  email: string;
}

export interface IBonus {
  id: number;
  dateStart: Date | string;
  dateEnd: Date | string;
  description: string;
  phone: string;
  type: string;
  rating: number;
  title: string;
  isActive: number;
  locations: ILocation[];
  tags: string[];
  company: ICompany;
  title: string;
}
