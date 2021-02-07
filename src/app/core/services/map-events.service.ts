import { Injectable } from '@angular/core';
import { IOffice } from '@interfaces/office.interface';
import { IBonus } from '@interfaces/bonus.interface';
import { Subject, Observable } from 'rxjs';
import { LatLng } from 'leaflet';

interface ILocationSubject {
  location: LatLng;
  showUserMarker: boolean;
}
@Injectable({ providedIn: 'root' })
export class MapEventsService {
  private officeSubject = new Subject<any>();
  private bonusSubject = new Subject<any>();
  private locationSubject = new Subject<ILocationSubject>();

  public zoomToOffice(office: IOffice): void {
    this.officeSubject.next(office);
  }

  public collBonusInfo(bonus: IBonus): void {
    this.bonusSubject.next(bonus);
  }

  public zoomToOfficeObserver(): Observable<any> {
    return this.officeSubject.asObservable();
  }

  public collBonusInfoObserver(): Observable<any> {
    return this.bonusSubject.asObservable();
  }

  public setMapView(location: LatLng, showUserMarker: boolean): void {
    this.locationSubject.next({ location, showUserMarker });
  }

  public changeMapViewObserver(): Observable<ILocationSubject> {
    return this.locationSubject.asObservable();
  }
}
