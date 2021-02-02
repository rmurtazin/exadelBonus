export interface IVendor {
  name: string;
}

export interface ITag {
  name: string;
}

export interface ICoordinates {
  latitude: number;
  longitude: number;
}
export interface ILocation {
  coordinates: ICoordinates;
  city: string;
  country: string;
  address: string;
}
