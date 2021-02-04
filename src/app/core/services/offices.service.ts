import { Injectable } from '@angular/core';
import { IOffice } from '@interfaces/office.interface';
import { Observable } from 'rxjs';
import { ApiService } from '@services/api.service';

@Injectable({ providedIn: 'root' })
export class OfficesService {
  constructor(private api: ApiService) {}

  public getOffices(): Observable<IOffice[]> {
    return this.api.get('assets/static/offices.json');
  }
}
