import { Component, Input } from '@angular/core';
import { IBonus } from '@interfaces/bonus.interface';

@Component({
  selector: 'app-bonus-list-view',
  templateUrl: './bonus-list-view.component.html',
  styleUrls: ['./bonus-list-view.component.scss'],
})
export class BonusListViewComponent {
  @Input() bonusMap: IBonus;
  @Input() bonuses: IBonus[];
  @Input() onBonusButtonClick: () => void;

  constructor() {}

  public trackById(index: string, item: IBonus): string {
    return item.id;
  }
}
