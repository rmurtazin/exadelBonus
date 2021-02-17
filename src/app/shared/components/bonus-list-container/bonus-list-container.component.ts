import { ToasterService } from '@services/toaster.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
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
          if (this.bonuses.length === 0) {
            setTimeout(() => {
              this.toasterService.showShow(
                'There are no bonuses for these filters yet',
                'Sorry!',
                'toastr-no-bonuses',
                'toastr-no-bonuses-title',
                'toastr-no-bonuses-message',
              );
            }, 0);
          }
        }
      },
      (err) => this.toasterService.showError(err, 'Some problems with getting bonuses'),
    );
  }

  public getBonusMap(): void {
    this.subscriptionBonusMap = this.mapEventsService.collBonusInfoObserver().subscribe(
      (bonus: IBonus) => {
        if (bonus) {
          this.bonusMap = bonus;
        }
      },
      (err) => this.toasterService.showError(err, 'Some problems with getting bonus from the map'),
    );
  }

  public ngOnDestroy(): void {
    this.subscriptionBonuses.unsubscribe();
    this.subscriptionBonusMap.unsubscribe();
  }
}
