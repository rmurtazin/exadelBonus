import { Component, Input } from '@angular/core';
import { IBonus } from '@interfaces/bonus.interface';

@Component({
  selector: 'app-bonus-detail',
  templateUrl: './bonus-detail.component.html',
  styleUrls: ['./bonus-detail.component.scss'],
})
export class BonusDetailComponent {
  @Input() public bonus: IBonus;

  constructor() {}

  public writeEmail(): boolean {
    // TODO: create email and send to user and vendor
    return true;
  }

  public writeToUserHistory(): boolean {
    // TODO: save bonus to user history
    return true;
  }

  public apply(): void {
    console.log('Button "Apply" clicked');
    this.writeEmail();
    this.writeToUserHistory();
  }
}
