import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IBonus } from '@interfaces/bonus.interface';
import { BonusComponent } from '../bonus/bonus.component';
import { animate, AUTO_STYLE, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-bonus-list-view',
  templateUrl: './bonus-list-view.component.html',
  styleUrls: ['./bonus-list-view.component.scss'],
  animations: [
    trigger('inOutAnimation', [
      transition(':enter', [
        style({ height: 0, opacity: 0 }),
        animate('1s ease-out', style({ height: AUTO_STYLE, opacity: 1 })),
      ]),
      transition(':leave', [
        style({ height: AUTO_STYLE, opacity: 1 }),
        animate('0.3s ease-in', style({ height: 0, opacity: 0 })),
      ]),
    ]),
  ],
})
export class BonusListViewComponent {
  @Input() bonuses: IBonus[];
  @Input() bonusButtonLabel: string;
  @Input() ifBonusMap: boolean;
  
  @Output() bonusButtonClickedEvent = new EventEmitter<BonusComponent>();

  constructor() {}

  public trackById(index: string, item: IBonus): string {
    return item.id;
  }

  public bonusButtonClicked(bonus: BonusComponent): void {
    this.bonusButtonClickedEvent.emit(bonus);
  }
}
