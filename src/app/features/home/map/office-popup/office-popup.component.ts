import { ChangeDetectorRef, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { IOffice } from '@interfaces/office.interface';
import { TranslateService } from '@ngx-translate/core';
import { FilterService } from '@services/filter.service';
import { MapEventsService } from '@services/map-events.service';
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
    private mapEvents: MapEventsService,
    private translate: TranslateService,
    private changeDetector: ChangeDetectorRef,
  ) {}

  public ngOnInit(): void {
    this.runChangeDetection();
    this.subscription.add(
      this.translate.onLangChange.subscribe(() => {
        this.runChangeDetection();
      }),
    );
  }

  private runChangeDetection(): void {
    this.changeDetector.detectChanges();
  }

  public clickTrigger(): void {
    this.mapEvents.zoomToOffice(this.office);
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
