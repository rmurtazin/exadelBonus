import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiService } from './api.service';
import { apiLinks } from './constants';

@Injectable({
  providedIn: 'root',
})
export class CityService {
  private citiesUrl = apiLinks.cities;

  constructor(private api: ApiService) {}

  public getCities(): Observable<string[]> {
    return this.api.get(this.citiesUrl).pipe(map((res) => res?.value));
  }
}
