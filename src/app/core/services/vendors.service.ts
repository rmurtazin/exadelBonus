import { Injectable } from '@angular/core';
import { INewVendor, IVendor } from '@interfaces/add-bonus.interface';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { ApiService } from './api.service';
import { apiLinks } from './constants';
import { ToasterService } from './toaster.service';

@Injectable({ providedIn: 'root' })
export class VendorsService {
  private url = apiLinks.vendor;

  constructor(private apiService: ApiService, private toasterService: ToasterService) {}

  public getVendors(query: string): Observable<IVendor[]> {
    return this.apiService.get(this.url, query).pipe(
      map(({ value }) => {
        return value;
      }),
      catchError(async () =>
        this.toasterService.showNotification('addBonus.notification.getVendors', 'error'),
      ),
    );
  }

  public createVendor(newVendor: INewVendor): Observable<IVendor> {
    return this.apiService.post(this.url, JSON.stringify(newVendor)).pipe(
      tap(() =>
        this.toasterService.showNotification('addBonus.notification.saveVendorSuccess', 'success'),
      ),
      map(({ value }) => value),
      catchError(async () =>
        this.toasterService.showNotification('addBonus.notification.saveVendorError', 'error'),
      ),
    );
  }
}
