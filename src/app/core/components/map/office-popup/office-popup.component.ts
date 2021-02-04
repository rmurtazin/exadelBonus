import { ChangeDetectorRef, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { IOffice } from '@interfaces/office.interface';
import { TranslateService } from '@ngx-translate/core';
import { MarkerEventsService } from '@services/markers-events.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-office-popup',
  templateUrl: './office-popup.component.html',
  styleUrls: ['./office-popup.component.scss'],
})
export class OfficePopupComponent implements OnInit, OnDestroy {

  @Input() public office: IOffice;
  private subscription = new Subscription();

  constructor(
    private markerEvents: MarkerEventsService,
    private translate: TranslateService,
    private changeDetector: ChangeDetectorRef
  ) { }

  public ngOnInit(): void {
    this.changeDetector.detectChanges();
    this.subscription.add(
      this.translate.onLangChange.subscribe(() => {
        this.changeDetector.detectChanges();
      })
    );
  }

  public clickTrigger(): void {
    this.markerEvents.officeMarkerClick(this.office);
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
