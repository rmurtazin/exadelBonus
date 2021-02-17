import { ToasterService } from '@services/toaster.service';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IBonus } from '@interfaces/bonus.interface';
import { BonusesService } from '@services/bonuses.service';
import { MapEventsService } from '@services/map-events.service';

@Component({
  selector: 'app-bonus-list-container',
  templateUrl: './bonus-list-container.component.html',
  styleUrls: ['./bonus-list-container.component.scss'],
})
export class BonusListContainerComponent implements OnInit, OnDestroy {
  public bonusMap: IBonus;
  public bonuses: IBonus[] = [];
  private subscriptionBonuses: Subscription;
  private subscriptionBonusMap: Subscription;
  @Input() onBonusButtonClick: () => void;

  constructor(
    public bonusesService: BonusesService,
    public mapEventsService: MapEventsService,
    public toasterService: ToasterService,
  ) {}

  public ngOnInit(): void {
    this.getBonusMap();
    this.getBonuses();
  }

  public getBonuses(): void {
    this.subscriptionBonuses = this.bonusesService.bonusSubject.subscribe(
      (data: IBonus[]) => {
        if (data) {
          this.bonuses = data;
        }
      },
      () => this.toasterService.showNotification('bonusList.notification.getBonusesError', 'error'),
    );
  }

  public getBonusMap(): void {
    this.subscriptionBonusMap = this.mapEventsService.collBonusInfoObserver().subscribe(
      (bonus: IBonus) => {
        if (bonus) {
          this.bonusMap = bonus;
        }
      },
      () => this.toasterService.showNotification('bonusList.notification.getBonusesFromMapError', 'error'),
    );
  }

  public ngOnDestroy(): void {
    this.subscriptionBonuses.unsubscribe();
    this.subscriptionBonusMap.unsubscribe();
  }
}
