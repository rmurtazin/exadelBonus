import { Injectable } from '@angular/core';
import { IBonus } from '@interfaces/bonus.interface';
import { BonusesService } from '@services/bonuses.service';
import { bounds } from 'leaflet';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class MockBonusService extends BonusesService {
  private mockBonuses: IBonus[] = [
    {
      id: 123,
      company: {
        email: 'MockEmail',
        name: 'MockName',
      },
      dateStart: 'mockDateStart',
      dateEnd: 'mockDateEnd',
      tags: ['mock'],
      isActive: 1,
      description: 'mock mock mock',
      locations: [
        {
          city: 'MockCity',
          country: 'MockCountry',
          address: 'mock addres',
          latitude: 0.12,
          longitude: 0.12,
        },
      ],
      type: 'mockType',
      rating: 2,
      phone: '342743623674',
    },
    {
      id: 234,
      company: {
        email: 'MockEmail',
        name: 'MockName',
      },
      dateStart: 'mockDateStart',
      dateEnd: 'mockDateEnd',
      tags: ['mock'],
      isActive: 1,
      description: 'mock mock mock',
      locations: [
        {
          city: 'MockCity',
          country: 'MockCountry',
          address: 'mock addres',
          latitude: 0.32,
          longitude: 0.32,
        },
      ],
      type: 'mockType',
      rating: 2,
      phone: '342743623674',
    },
  ];

  constructor() {
    super(null, null);
  }

  public getBonuses(query?: string): Observable<IBonus[]> {
    if (query) {
      return of([this.mockBonuses[0]]);
    }
    return of(this.mockBonuses);
  }

  public getMockBonuses(): IBonus[] {
    return this.mockBonuses;
  }
}
