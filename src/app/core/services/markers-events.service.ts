import { Injectable } from '@angular/core';
import { IOffice } from '@interfaces/office.interface';
import { IBonus } from '@interfaces/bonus.interface';
import { Subject, Observable } from 'rxjs';

@Injectable()
export class MarkerEventsService {
  private officeSubject = new Subject<any>();
  private bonusSubject = new Subject<any>();

  public officeMarkerClick(office: IOffice): void {
    this.officeSubject.next(office);
  }

  public bonusMarkerClick(bonus: IBonus): void {
    this.bonusSubject.next(bonus);
  }

  public officeMarkerClickObserver(): Observable<any> {
    return this.officeSubject.asObservable();
  }

  public bonusMarkerClickObserver(): Observable<any> {
    return this.bonusSubject.asObservable();
  }
}
