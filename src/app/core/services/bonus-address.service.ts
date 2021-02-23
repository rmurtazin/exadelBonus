import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, filter, map } from 'rxjs/operators';
import { ApiService } from './api.service';
import { ToasterService } from './toaster.service';

@Injectable({
  providedIn: 'root',
})
export class BonusAddressService {
  private apiKey = '977dc027c5554e86b7bbe1ba4732e7e0'; // TODO: hide key to .env file
  private baseUrl = 'https://api.opencagedata.com/geocode/v1/json';

  constructor(private apiService: ApiService, private toasterService: ToasterService) {}

  public getSearchedAddress(place): Observable<any> {
    const query = `?q=${place}&language=en&key=${this.apiKey}`;
    return this.apiService.get(this.baseUrl, query).pipe(
      map((data) => data.results),
      filter((data) => data.length > 0 && data[0].components.city),
      catchError(async () =>
        this.toasterService.showNotification('addBonus.notification.getAddress', 'error'),
      ),
    );
  }
}
