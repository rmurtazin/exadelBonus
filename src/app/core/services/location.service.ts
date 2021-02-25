import { Injectable } from '@angular/core';
import { ToasterService } from './toaster.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ChoosePlaceDialogComponent } from '../../shared/components/choose-place-dialog/choose-place-dialog.component';
import { LatLng, latLng } from 'leaflet';
import { from, Observable, Subject, Subscription } from 'rxjs';
import { MapEventsService } from '@services/map-events.service';
import { cityByLocationUrl } from './constants';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class LocationService {
  private geolocationSubject = new Subject<string>();
  private dialogRef: MatDialogRef<ChoosePlaceDialogComponent>;

  constructor(
    private toastr: ToasterService,
    private dialog: MatDialog,
    private mapEventService: MapEventsService,
    private http: HttpClient,
  ) {
    if (localStorage.getItem('currentLatitude') && localStorage.getItem('currentLongitude')) {
      const lat = Number(localStorage.getItem('currentLatitude'));
      const lng = Number(localStorage.getItem('currentLongitude'));
      const location = latLng(lat, lng);
      this.getCityByLocation(location);
    }
  }

  public changeLocationObserver(): Observable<string> {
    return this.geolocationSubject.asObservable();
  }

  public selectPlaceDialog(): void {
    this.dialogRef = this.dialog.open(ChoosePlaceDialogComponent, { disableClose: true });
    this.dialogRef.afterClosed().subscribe((location) => this.setPosition(location));
  }

  private setPosition(location?: LatLng): void {
    if (location) {
      this.saveToStorage(location);
      this.getCityByLocation(location);
      this.mapEventService.setMapView(location);
      return;
    }
    this.getUserLocation().subscribe((geolocation) => {
      this.saveToStorage(geolocation);
      this.getCityByLocation(geolocation);
      const showUserLocation = true;
      this.mapEventService.setMapView(geolocation, showUserLocation);
    });
  }

  public saveToStorage(location: LatLng): void {
    localStorage.setItem('currentLatitude', location.lat.toString());
    localStorage.setItem('currentLongitude', location.lng.toString());
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

  private getCityByLocation(location: LatLng): void {
    const url = cityByLocationUrl(location.lat, location.lng);
    this.http
      .get(url)
      .pipe(map((response: any) => response?.city))
      .subscribe((city: string) => {
        this.mapEventService.setMapView(location);
        this.geolocationSubject.next(city);
      });
  }
}
