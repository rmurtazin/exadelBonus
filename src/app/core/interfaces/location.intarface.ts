export interface ICoordinates{
    latitude: number;
    longitude: number;
}

export interface ILocation{
    id: string;
    coordinates: ICoordinates;     
}