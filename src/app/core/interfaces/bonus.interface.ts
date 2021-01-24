export interface ILocation{
    latitude: number,
    longitude: number,
    city: string,
    country: string,
    address: string
}

export interface ICompany{
    name: string,
    phone: string,
    email: string
}
export interface IBonus {
    id: number,
    dateStart: string,
    dateEnd: string,
    description: string,
    company: ICompany,
    type: string,
    discount: number,
    locations: ILocation[],
    tags: string[]
}