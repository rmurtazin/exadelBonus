import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PlaceDetectionMethod } from '@enums/place-detection-method';
import { IOffice } from '@interfaces/office.interface';
import { FilterService } from '@services/filter.service';
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
  public selectedPlaceDetection: PlaceDetectionMethod = PlaceDetectionMethod.officeLocation;
  private subscription = new Subscription();

  constructor(
    public dialogRef: MatDialogRef<ChoosePlaceDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: LatLng,
    private officeService: OfficesService,
    private filterService: FilterService,
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
    if (Number(this.selectedPlaceDetection) === PlaceDetectionMethod.geolocation) {
      this.dialogRef.close();
      return;
    }
    const office = this.offices[this.selectedOffice];
    const location = latLng(office.latitude, office.longitude);
    this.filterService.addCityToQuery(office.city);
    this.dialogRef.close(location);
  }
}
