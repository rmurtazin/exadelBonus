import { ToasterService } from '@services/toaster.service';
import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { IBonus } from '@interfaces/bonus.interface';
import { BonusesService } from '@services/bonuses.service';
import { MapEventsService } from '@services/map-events.service';
import { BonusComponent } from './bonus/bonus.component';

@Component({
  selector: 'app-bonus-list-container',
  templateUrl: './bonus-list-container.component.html',
  styleUrls: ['./bonus-list-container.component.scss'],
})
export class BonusListContainerComponent implements OnInit, OnDestroy {
  public bonuses: IBonus[] = [];
  private subscriptionBonuses: Subscription;
  private subscriptionBonusMap: Subscription;

  @Input() bonusButtonLabel: string;

  @Output() bonusButtonClickedEvent = new EventEmitter<BonusComponent>();

  constructor(
    public bonusesService: BonusesService,
    public mapEventsService: MapEventsService,
    public toasterService: ToasterService,
  ) {}

  public ngOnInit(): void {
    this.getBonusMap();
    this.getBonuses();
  }

  public bonusButtonClicked(bonus: BonusComponent): void {
    this.bonusButtonClickedEvent.emit(bonus);
  }

  public getBonuses(): void {
    this.subscriptionBonuses = this.bonusesService.bonusSubject.subscribe(
      (data: IBonus[]) => {
        if (data) {
          this.bonuses = data;
          if (this.bonuses.length === 0) {
            this.toasterService.showCustomNotification('bonusList.notification.getNoBonuses', {
              positionClass: 'toast-top-center',
              toastClass: 'toast-no-bonuses',
              titleClass: 'toast-no-bonuses-title',
              messageClass: 'toast-no-bonuses-message',
            });
          }
        }
      },
      () => this.toasterService.showNotification('bonusList.notification.getBonusesError', 'error'),
    );
  }

  public getBonusMap(): void {
    this.subscriptionBonusMap = this.mapEventsService.collBonusInfoObserver().subscribe(
      (bonus: IBonus) => {
        if (bonus) {
          this.findBonusMapInView(bonus);
        }
      },
      () =>
        this.toasterService.showNotification(
          'bonusList.notification.getBonusesFromMapError',
          'error',
        ),
    );
  }

  public findBonusMapInView(bonus: IBonus): void {
    let indexBonusMapInView: number;
    const cloneBonuses: IBonus[] = [...this.bonuses];
    cloneBonuses.find((bonusItem, index) => {
      if (bonus === bonusItem) {
        indexBonusMapInView = index;
      }
    });
    cloneBonuses.splice(indexBonusMapInView, 1);
    cloneBonuses.unshift(bonus);
    this.bonuses = cloneBonuses;
  }

  public ngOnDestroy(): void {
    this.subscriptionBonuses.unsubscribe();
    this.subscriptionBonusMap.unsubscribe();
  }
}
