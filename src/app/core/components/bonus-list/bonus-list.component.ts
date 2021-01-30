import { Component, OnInit } from '@angular/core';
import { IBonus } from '../../interfaces/bonus.interface';
import { BonusesService } from '../../services/bonuses.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-bonus-list',
  templateUrl: './bonus-list.component.html',
  styleUrls: ['./bonus-list.component.scss'],
})
export class BonusListComponent implements OnInit {
  public bonuses: IBonus[];
  constructor(public bonusesService: BonusesService) {}

  ngOnInit() {
    this.getBonuses();
  }

  public getBonuses() {
    this.bonusesService.getBonuses().subscribe(
      (data) => {
        if (data) {
          this.bonuses = data;
        }
      },
      (err) => console.log(`error ${err}`)
    );
  }
}
