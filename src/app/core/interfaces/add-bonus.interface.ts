export interface IVendor {
  name: string;
}

export interface ITag {
  name: string;
}

export interface ILocation {
  latitude: number;
  longitude: number;
  city: string;
  country: string;
  address: string;
}

export interface IVendor {
  vendorId: string;
  vendorName: string;
  vendorEmail: string;
}

export interface INewBonus {
  title: string;
  description: string;
  type: string;
  phone: string;
  company: string;
  dateStart: string;
  dateEnd: string;
  locations: ILocation[];
  tags: string[];
}

export interface IBonusFormConfig {
  closeForm: () => void;
  addAddress: (myForm: any) => void;
  vendorNameChange: (vendorName: string) => IVendor[];
  createNewVendor: (newVendor: string) => IVendor;
  createBonus: (newBonus: INewBonus) => INewBonus;
}
