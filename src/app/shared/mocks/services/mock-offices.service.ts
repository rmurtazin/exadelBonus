import { Injectable } from '@angular/core';
import { IOffice } from '@interfaces/office.interface';
import { OfficesService } from '@services/offices.service';
import { Observable, of } from 'rxjs';

@Injectable({providedIn: 'root'})
export class MockOfficesService extends OfficesService{
    private mockBonuses: IOffice[] = [
        {
            id: '123',
            country: 'MockCountry',
            city: 'MockCity',
            address: 'mock addres',
            longitude: 0,
            latitude: 0,
            phone: '33333333'
        },
        {
            id: '123',
            country: 'MockCountry',
            city: 'MockCity',
            address: 'mock addres',
            longitude: 0,
            latitude: 0,
            phone: '44444444'
        }
    ];

    constructor(){
        super(null);
    }

    public getOffices(): Observable<IOffice[]>{
        return of(this.mockBonuses);
    }

    public getMockOffices(): IOffice[]{
        return this.mockBonuses;
    }
}
