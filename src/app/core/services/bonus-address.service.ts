import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class BonusAddressService {
  private apiKey = '977dc027c5554e86b7bbe1ba4732e7e0'; // TODO: hide key to .env file
  private baseUrl = 'https://api.opencagedata.com/geocode/v1/json';

  constructor(public apiService: ApiService) {}

  public getSearchedAddress(place): Observable<any> {
    const query = `q=${place}&key=${this.apiKey}`;
    return this.apiService.get(this.baseUrl, query).pipe(
      map((data) => data.results),
      filter((data) => data.length > 0 && data[0].components.city),
    );
  }
}
