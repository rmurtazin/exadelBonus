import { IBonusFormConfig } from './../../../../core/interfaces/add-bonus.interface';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IBonus } from '@interfaces/bonus.interface';
import { BonusComponent } from '../bonus/bonus.component';

@Component({
  selector: 'app-bonus-list-view',
  templateUrl: './bonus-list-view.component.html',
  styleUrls: ['./bonus-list-view.component.scss'],
})
export class BonusListViewComponent {
  @Input() bonusMap: IBonus;
  @Input() bonuses: IBonus[];
  @Input() bonusButtonLabel: string;

  @Output() bonusButtonClickedEvent = new EventEmitter<BonusComponent>();

  constructor() {}

  public trackById(index: string, item: IBonus): string {
    return item.id;
  }

  public bonusButtonClicked(bonus: BonusComponent): void {
    this.bonusButtonClickedEvent.emit(bonus);
  }
}
