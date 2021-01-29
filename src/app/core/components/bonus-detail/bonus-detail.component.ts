import { Component, Input } from '@angular/core';
import { IBonus } from '@interfaces/bonus.interface';

@Component({
  selector: 'app-bonus-detail',
  templateUrl: './bonus-detail.component.html',
  styleUrls: ['./bonus-detail.component.scss']
})
export class BonusDetailComponent{
  @Input() public bonus: IBonus;

  constructor() { }

  public onWriteEmail(): boolean {
     // TODO: create email and send to user and vendor
    return true;
  }

  public onWriteToUserHistory(): boolean{
     // TODO: save bonus to user history
    return true;
  }

  public onApply(): void {
    console.log('Button "Apply" clicked');
    this.onWriteEmail();
    this.onWriteToUserHistory();
  }

}
