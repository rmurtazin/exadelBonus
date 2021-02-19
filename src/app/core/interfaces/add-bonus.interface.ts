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
  id: string;
  name: string;
  email: string;
}

export interface INewVendor {
  name: string;
  email: string;
}

export interface INewBonus {
  title: string;
  description: string;
  type: string;
  phone: string;
  companyId: string;
  dateStart: string;
  dateEnd: string;
  locations: ILocation[];
  tags: string[];
}

export interface IBonusFormConfig {
  closeForm: () => void;
  addAddress: (myForm: any) => void;
  vendorNameChange: (vendorName: string) => void;
  createNewVendor: (newVendor: IVendor) => void;
  createBonus: (newBonus: INewBonus) => void;
  removeVendors: () => void;
}
