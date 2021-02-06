import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToasterService } from './toaster.service';
import { ChoosePlaceDialogComponent } from '@components/choose-place-dialog/choose-place-dialog.component';
import { LatLng } from 'leaflet';

@Injectable()
export class DialogService {
  private selectedPosition: LatLng;
  private dialogRef: MatDialogRef<ChoosePlaceDialogComponent>;

  constructor(private dialog: MatDialog) {}

  public selectPlace(): void {
    if (this.selectedPosition) {
      return;
    }
    this.dialogRef = this.dialog.open(ChoosePlaceDialogComponent);
  }
}
