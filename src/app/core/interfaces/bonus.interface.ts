interface ICoordinates {
  latitude: number;
  longitude: number;
}

interface ILocation {
  id: number;
  coordinates: ICoordinates;
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
<<<<<<< HEAD
  id: number;
  dateStart: string;
  dateEnd: string;
  description: string;
  company: ICompany;
  type: string;
  discount: number;
  locations: ILocation[];
  tags: string[];
=======
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
>>>>>>> 8b9b7be417f27f0f43a8af64f81d0f6824f93169
}
