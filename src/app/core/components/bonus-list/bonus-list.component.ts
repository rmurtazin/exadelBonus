import { Component, OnInit } from '@angular/core';
import { IBonus } from '../../interfaces/bonus.interface';
import { BonusesService } from '../../services/bonuses.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-bonus-list',
  templateUrl: './bonus-list.component.html',
  styleUrls: ['./bonus-list.component.scss'],
})
export class BonusListComponent implements OnInit {
  public bonuses: IBonus[] = [];
  public bonusFromMap: IBonus;

  constructor(public bonusesService: BonusesService) {}

  ngOnInit(): void {
    this.getBonuses();
    this.getBonusMap();
  }

  public getBonuses(): void {
    this.bonusesService.getBonuses().subscribe(
      (data: IBonus[]) => {
        if (data) {
          this.bonuses = data;
        }
      },
      (err) => console.log(`error ${err}`)
    );
  }

  public getBonusMap(): void {
    this.bonusesService.bonusFromMap.subscribe((bonus: IBonus) => {
      this.bonusFromMap = bonus;
    });
  }
}
