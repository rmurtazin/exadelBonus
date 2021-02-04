import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class BonusAddressService {
  private apiKey = '977dc027c5554e86b7bbe1ba4732e7e0'; // TODO: hide key to .env file
  private baseUrl = 'https://api.opencagedata.com/geocode/v1';

  constructor(public apiService: ApiService) {}

  public getSearchedAddress(place): Observable<any> {
    const currentUrl = `${this.baseUrl}/json?q=${place}&key=${this.apiKey}`;
    return this.apiService.get(currentUrl).pipe(
      map(({ results }) => {
        return results;
      }),
      filter(data=>data.length > 0 && data[0].components.city)
    );
  }
}
