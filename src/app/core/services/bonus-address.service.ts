import { Injectable } from '@angular/core';
import { nextTick } from 'process';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class BonusAddressService {
  apiKey: string = '977dc027c5554e86b7bbe1ba4732e7e0';
  baseUrl: string = 'https://api.opencagedata.com/geocode/v1';

  constructor(public apiService: ApiService) {}

  public getSearchedAddress(place): Observable<any> {
    const currentUrl = `${this.baseUrl}/json?q=${place}&key=${this.apiKey}`;
    return this.apiService.get(currentUrl).pipe(map((data) => data.results));
  }
}
