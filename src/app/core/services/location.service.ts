import { Injectable } from '@angular/core';
import { from, Observable, Subject } from 'rxjs';
import { ToasterService } from './toaster.service';
import { take } from 'rxjs/operators';

@Injectable()
export class LocationService {
  private geolocationSubject = new Subject<string>();

  constructor(private toastr: ToasterService) {
      this.watchGeolocationPermissionChanging();
  }

  private permissionChanged(status: string): void {
    this.geolocationSubject.next(status);
  }

  private watchGeolocationPermissionChanging(): void {
    if ('geolocation' in navigator) {
      console.log('step 1');
      from(navigator.permissions.query({ name: 'geolocation' })).subscribe((permission) => {
        permission.onchange = (event: any) => {
          const permissionStatus: PermissionStatus = event.target;
          this.permissionChanged(permissionStatus.state);
        };
      });
    }
  }

  public permissionChangingObserver(): Observable<string> {
    return this.geolocationSubject.asObservable();
  }

  public getPermissionStatus(): Observable<any>{
      return from(navigator.permissions.query({name: 'geolocation'})).pipe(take(1));
  }

  public getUserLocation(): Observable<any> {
    return new Observable((observer) => {
      const options = {
        enableHighAccuracy: false,
        timeout: 15000,
        maximumAge: 0,
      };
      if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            observer.next(position);
          },
          (error) => {
            observer.error(error);
          },
          options,
        );
      } else {
        this.toastr.showError('Geolocation not available', 'Error');
      }
    });
  }
}
