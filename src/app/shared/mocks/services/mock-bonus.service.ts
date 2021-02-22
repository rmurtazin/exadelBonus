import { Injectable } from '@angular/core';
import { IBonus } from '@interfaces/bonus.interface';
import { BonusesService } from '@services/bonuses.service';
import { Observable, of } from 'rxjs';

export class MockBonusService extends BonusesService {
  private mockBonuses: IBonus[] = [
    {
      id: '123',
      company: {
        id: 'MockId',
        email: 'MockEmail',
        name: 'MockName',
      },
      dateStart: 'mockDateStart',
      dateEnd: 'mockDateEnd',
      tags: ['mock'],
      isActive: true,
      description: 'mock mock mock',
      locations: [
        {
          city: 'MockCity',
          country: 'MockCountry',
          address: 'mock addres',
          longitude: 46.879966,
          latitude: -122.726988,
        },
      ],
      type: 'mockType',
      rating: 2,
      phone: '342743623674',
      title: 'mockTitle1',
    },
    {
      id: '234',
      company: {
        id: 'MockId',
        email: 'MockEmail',
        name: 'MockName',
      },
      dateStart: 'mockDateStart',
      dateEnd: 'mockDateEnd',
      tags: ['mock'],
      isActive: true,
      description: 'mock mock mock',
      locations: [
        {
          city: 'MockCity',
          country: 'MockCountry',
          address: 'mock addres',
          longitude: 46.879923,
          latitude: -121.726923,
        },
      ],
      type: 'mockType',
      rating: 2,
      phone: '342743623674',
      title: 'mockTitle2',
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
