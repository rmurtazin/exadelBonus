import { ToasterService } from '@services/toaster.service';
import {Component, OnInit, OnDestroy, Input} from '@angular/core';
import { Subscription } from 'rxjs';
import { IBonus } from '@interfaces/bonus.interface';
import { BonusesService } from '@services/bonuses.service';
import { MarkerEventsService } from '@services/markers-events.service';

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

  @Input() bonusButtonClickFunc: () => void;

  constructor(
    public bonusesService: BonusesService,
    public markerEventsService: MarkerEventsService,
    public toasterService: ToasterService,
  ) {}

  public ngOnInit(): void {
    this.getBonusMap();
    this.getBonuses();
  }

  public getBonuses(): void {
    this.subscriptionBonuses = this.bonusesService.getBonuses().subscribe(
      (data: IBonus[]) => {
        if (data) {
          this.bonuses = data;
        }
      },
      (err) => this.toasterService.showError(err, 'Some problems with getting bonuses'),
    );
  }

  public getBonusMap(): void {
    this.subscriptionBonusMap = this.markerEventsService.bonusMarkerClickObserver().subscribe(
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
