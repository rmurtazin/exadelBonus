import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { IBonus } from '@interfaces/bonus.interface';

@Component({
  selector: 'app-bonus',
  templateUrl: './bonus.component.html',
  styleUrls: ['./bonus.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BonusComponent {
  @Input() bonusButtonLabel: string;
  @Input() bonus: IBonus;

  @Output() bonusButtonClickedEvent = new EventEmitter<BonusComponent>();

  public isForm = false;

  constructor() {}

  public bonusButtonClick(): void {
    this.bonusButtonClickedEvent.emit(this);
  }

  public closeRateForm(): void {
    this.isForm = false;
  }
}
