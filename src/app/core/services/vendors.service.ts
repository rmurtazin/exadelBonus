import { Injectable } from '@angular/core';
import { INewVendor, IVendor } from '@interfaces/add-bonus.interface';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiService } from './api.service';
import { apiLinks } from './constants';

@Injectable({ providedIn: 'root' })
export class VendorsService {
  private url = apiLinks.vendor;

  constructor(private apiService: ApiService) {}

  public getVendors(query: string): Observable<IVendor[]> {
    return this.apiService.get(this.url, query);
  }

  public createVendor(newVendor: INewVendor): Observable<IVendor> {
    return this.apiService.post(this.url, JSON.stringify(newVendor));
  }
}
