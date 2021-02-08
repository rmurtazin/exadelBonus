import { Injectable } from '@angular/core';
import { IVendor } from '@interfaces/add-bonus.interface';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiService } from './api.service';

@Injectable({ providedIn: 'root' })
export class VendorsService {
  private url = '../../../assets/static/vendors.json';
  constructor(private apiService: ApiService) {}
  public getVendors(): Observable<IVendor[]> {
    return this.apiService.get(this.url).pipe(map((data) => data));
  }
  public createVendor(): Observable<IVendor> {
    // TODO: there must be post method
    return this.apiService.get(this.url).pipe(map((data) => data[0]));
  }
}
