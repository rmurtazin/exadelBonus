import { Component, OnInit, Input } from '@angular/core';
import { IBonus } from '@interfaces/bonus.interface';

@Component({
  selector: 'app-bonus-detail',
  templateUrl: './bonus-detail.component.html',
  styleUrls: ['./bonus-detail.component.scss']
})
export class BonusDetailComponent implements OnInit {
  @Input()
  public bonus: IBonus;

  constructor() { }

  ngOnInit(): void {
  }

  onWriteEmail(): boolean {
    return true;
  }

  onApply(): void {
    console.log('Button "Want to use" clicked');
    this.onWriteEmail();
    // and write to UserBonusesHistory
  }

}
