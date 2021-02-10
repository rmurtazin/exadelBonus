interface ILocation {
  id: number;
  latitude: number;
  longitude: number;
  city: string;
  country: string;
  address: string;
}

interface ICompany {
  name: string;
  phone: string;
  email: string;
}
export interface IBonus {
  id: number;
  dateStart: string;
  dateEnd: string;
  description: string;
  company: ICompany;
  type: string;
  rating: number;
  discount: number;
  locations: ILocation[];
  tags: string[];
}
