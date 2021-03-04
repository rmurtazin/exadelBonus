import { Injectable } from '@angular/core';
import { ToasterService } from './toaster.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ChoosePlaceDialogComponent } from '../../shared/components/choose-place-dialog/choose-place-dialog.component';
import { LatLng, latLng } from 'leaflet';
import { Observable, Subject } from 'rxjs';
import { MapEventsService } from '@services/map-events.service';
import { cityByLocationUrl } from './constants';
import { map, take } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { IOffice } from '@interfaces/office.interface';

@Injectable({ providedIn: 'root' })
export class LocationService {
  private geolocationSubject = new Subject<string>();
  private dialogRef: MatDialogRef<ChoosePlaceDialogComponent>;

  constructor(
    private toastr: ToasterService,
    private dialog: MatDialog,
    private mapEventService: MapEventsService,
    private http: HttpClient,
  ) {}

  public changeLocationObserver(): Observable<string> {
    return this.geolocationSubject.asObservable();
  }

  public selectPlaceDialog(): void {
    this.dialogRef = this.dialog.open(ChoosePlaceDialogComponent, { disableClose: true });
    this.dialogRef.afterClosed().subscribe((result: boolean | IOffice) => this.setPosition(result));
  }

  private setPosition(result?: IOffice | boolean): void {
    if (result) {
      if (typeof result === 'object') {
        localStorage.setItem('currentCity', result.city);
        this.mapEventService.zoomToOffice(result);
        return;
      }
      this.getUserLocation().subscribe((geolocation) => {
        this.getCityByLocation(geolocation).subscribe((city: string) => {
          if (city) {
            localStorage.setItem('currentCity', city);
            this.geolocationSubject.next(city);
            this.geolocationSubject.complete();
          }
        });
        const showUserLocation = true;
        this.mapEventService.setMapView(geolocation, showUserLocation);
      });
    }
  }

  private getUserLocation(): Observable<LatLng> {
    return new Observable((observer) => {
      const options = {
        enableHighAccuracy: false,
        timeout: 15000,
        maximumAge: 0,
      };
      if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const location = latLng(position.coords.latitude, position.coords.longitude);
            observer.next(location);
          },
          (error) => {
            observer.error(error);
          },
          options,
        );
      } else {
        this.toastr.showNotification('location.notification.error', 'error');
      }
    });
  }

  private getCityByLocation(location: LatLng): Observable<any> {
    const url = cityByLocationUrl(49.23599435472236, 28.497092625653238); //location.lat, location.lng);
    return this.http.get(url).pipe(
      take(1),
      map((response: any) => response?.city),
    );
  }
}
