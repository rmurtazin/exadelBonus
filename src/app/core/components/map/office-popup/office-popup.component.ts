import { Component, Input, OnInit } from '@angular/core';
import { IOffice } from '@interfaces/office.interface';
import { MarkerEventsService } from '@services/markers-events.service';

@Component({
  selector: 'app-office-popup',
  templateUrl: './office-popup.component.html',
  styleUrls: ['./office-popup.component.scss'],
})
export class OfficePopupComponent implements OnInit {
  @Input() public office: IOffice;

  constructor(private markerEvents: MarkerEventsService) {}

  public ngOnInit(): void {}

  public clickTrigger(): void {
    this.markerEvents.officeMarkerClick(this.office);
  }
}
