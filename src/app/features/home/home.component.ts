import { Component, OnInit } from '@angular/core';
import {IBonus} from '@interfaces/bonus.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public bonusButtonLabel = 'Apply';

  constructor() {}

  ngOnInit(): void {}

  public openApplyForm(bonus: IBonus): void {
  }
}
