import { Component, OnInit } from '@angular/core';
import { BonusComponent } from '../../shared/components/bonus-list-container/bonus/bonus.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public bonusButtonLabel = 'Apply';

  constructor() {}

  ngOnInit(): void {}

  public openApplyForm(bonus: BonusComponent): void {}
}
