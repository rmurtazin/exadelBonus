import { Injectable } from '@angular/core';
import { IVendor } from '@interfaces/add-bonus.interface';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiService } from './api.service';

@Injectable({ providedIn: 'root' })
export class VendorsService {
    private url: string = '../../../assets/static/vendors.json';
    constructor(private apiService: ApiService) { }
    public getVendors(): Observable<IVendor[]> {
      return this.apiService.get(this.url).pipe(
          map(data=>data)
      )
    }
    
}
