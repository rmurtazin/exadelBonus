import { Injectable } from '@angular/core';
import { ToasterService } from './toaster.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ChoosePlaceDialogComponent } from '../../shared/components/choose-place-dialog/choose-place-dialog.component';
import { LatLng, latLng } from 'leaflet';
import { Observable, Subscription } from 'rxjs';
import { MapEventsService } from '@services/map-events.service';
import { BonusAddressService } from './bonus-address.service';

@Injectable()
export class LocationService {
  private subscription = new Subscription();
  private dialogRef: MatDialogRef<ChoosePlaceDialogComponent>;

  constructor(
    private toastr: ToasterService,
    private dialog: MatDialog,
    private mapEventService: MapEventsService,
    private address: BonusAddressService,
  ) {
    if (!localStorage.getItem('currentLatitude')) {
      this.selectPlaceDialog();
    }
  }

  public selectPlaceDialog(): void {
    this.dialogRef = this.dialog.open(ChoosePlaceDialogComponent, { disableClose: true });
    this.subscription.add(
      this.dialogRef.afterClosed().subscribe((location) => this.setPosition(location)),
    );
  }

  private setPosition(location: LatLng): void {
    if (location) {
      this.saveToStorage(location);
      const showUserLocation = false;
      this.mapEventService.setMapView(location, showUserLocation);
      return;
    }
    this.getUserLocation().subscribe((geolocation) => {
      this.saveToStorage(geolocation);
      const showUserLocation = true;
      this.mapEventService.setMapView(geolocation, showUserLocation);
    });
  }

  private saveToStorage(location: LatLng): void {
    localStorage.setItem('currentLatitude', location.lat.toString());
    localStorage.setItem('currentLongitude', location.lng.toString());
  }

  public moveToCityLocation(city: string): void {
    this.address.getSearchedAddress(city).subscribe((addresses) => {
      const [firstAddress] = addresses;
      const position = latLng(firstAddress.geometry.lat, firstAddress.geometry.lng);
      const showUserMarker = false;
      this.mapEventService.setMapView(position, showUserMarker);
    });
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
}
