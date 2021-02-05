import { Component, Input } from '@angular/core';
import { IBonus } from '@interfaces/bonus.interface';
import { BonusesService } from '../../../services/bonuses.service';

@Component({
  selector: 'app-bonus-popup',
  templateUrl: './bonus-popup.component.html',
  styleUrls: ['./bonus-popup.component.scss'],
})
export class BonusPopupComponent {

  @Input() public bonus: IBonus;

  constructor(
    private bonusesService: BonusesService
  ) {}

  public showBonusMap(): void {
    console.log(this.bonus)
    this.bonusesService.setBonusFromMap(this.bonus);
  }

}
