import { Component, Input, OnInit } from '@angular/core';
import { IOffice } from '@interfaces/office.interface';
import { MarkerEventsService } from '@services/markers-events.service';


@Component({
  selector: 'app-office-popup',
  templateUrl: './office-popup.component.html',
  styleUrls: ['./office-popup.component.scss']
})
export class OfficePopupComponent implements OnInit {

  @Input() public data: IOffice;

  constructor( private markerEvents: MarkerEventsService) { }

  ngOnInit(): void {}

  public clickTrigger(): void{
    this.markerEvents.officeMarkerClick(this.data);
  }
}
