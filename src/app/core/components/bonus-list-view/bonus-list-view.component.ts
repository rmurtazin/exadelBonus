import { Component, Input, OnInit } from '@angular/core';
import { IBonus } from '../../interfaces/bonus.interface';

@Component({
  selector: 'app-bonus-list-view',
  templateUrl: './bonus-list-view.component.html',
  styleUrls: ['./bonus-list-view.component.scss']
})
export class BonusListViewComponent implements OnInit {
  @Input('bonusMap') bonusMap: IBonus;
  @Input('bonuses') bonuses: IBonus[];
  constructor() { }

  ngOnInit(): void {

  }

  public trackById(index: number, item: IBonus): number {
    return item.id;
}

}
