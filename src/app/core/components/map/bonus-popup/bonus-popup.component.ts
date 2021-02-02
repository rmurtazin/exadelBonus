import { Component, Input, OnInit } from '@angular/core';
import { IBonus } from '@interfaces/bonus.interface';
import { TranslateService } from '@ngx-translate/core';
import { BonusesService } from '../../../services/bonuses.service';

@Component({
  selector: 'app-bonus-popup',
  templateUrl: './bonus-popup.component.html',
  styleUrls: ['./bonus-popup.component.scss'],
})
export class BonusPopupComponent implements OnInit {
  constructor(
    private bonusesService: BonusesService
  ) {}
  @Input() public bonus: IBonus;

  public ngOnInit(): void {}

  public log($event): void {
    console.log($event);
  }

  public showBonusMap(): void {
    this.bonusesService.setBonusFromMap(this.bonus);
  }
}
