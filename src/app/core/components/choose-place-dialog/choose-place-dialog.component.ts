import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { placeDetectionMethod } from '@enums/place-detection-method';
import { IOffice } from '@interfaces/office.interface';
import { OfficesService } from '@services/offices.service';
import { latLng, LatLng } from 'leaflet';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-choose-place-popup',
  templateUrl: './choose-place-dialog.component.html',
  styleUrls: ['./choose-place-dialog.component.scss'],
})
export class ChoosePlaceDialogComponent implements OnInit {
  public geolocationEnabled = false;
  public offices: IOffice[];
  public selectedOffice = 0;
  public selectedPlaceDetection = placeDetectionMethod.officeLocation;
  private subscription = new Subscription();

  constructor(
    public dialogRef: MatDialogRef<ChoosePlaceDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: LatLng,
    private officeService: OfficesService
  ) {}

  public ngOnInit(): void {
    this.getOfficesList();
  }

  private getOfficesList(): void {
    this.subscription.add(
      this.officeService.getOffices().subscribe((offices: IOffice[]) => {
        this.offices = offices;
      }),
    );
  }

  apply(): void {
    if (this.selectedPlaceDetection === placeDetectionMethod.geolocation){
      this.dialogRef.close();
      return;
    }
    const location = latLng(this.offices[this.selectedOffice].latitude, this.offices[this.selectedOffice].latitude)
    this.dialogRef.close(location);
  }
}
