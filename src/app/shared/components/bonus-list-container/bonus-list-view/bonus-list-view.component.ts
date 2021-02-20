import { IBonusFormConfig } from './../../../../core/interfaces/add-bonus.interface';
import {Component, EventEmitter, Input, Output} from '@angular/core';
import { IBonus } from '@interfaces/bonus.interface';

@Component({
  selector: 'app-bonus-list-view',
  templateUrl: './bonus-list-view.component.html',
  styleUrls: ['./bonus-list-view.component.scss'],
})
export class BonusListViewComponent {
  @Input() bonusMap: IBonus;
  @Input() bonuses: IBonus[];
  @Input() bonusButtonLabel: string;
  @Input() ifBonusFromMap: boolean;

  @Output() bonusButtonClickedEvent = new EventEmitter<IBonus>();

  constructor() {}

  public trackById(index: string, item: IBonus): string {
    return item.id;
  }

  public bonusButtonClicked(bonus: IBonus) {
    this.bonusButtonClickedEvent.emit(bonus);
  }
}
