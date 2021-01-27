import { Component, Input, OnInit } from '@angular/core';
import { IBonus } from '@interfaces/bonus.interface';

@Component({
  selector: 'app-bonus-popup',
  templateUrl: './bonus-popup.component.html',
  styleUrls: ['./bonus-popup.component.scss']
})
export class BonusPopupComponent implements OnInit {

  @Input() public bonus: IBonus;

  public ngOnInit(): void {}

  public log($event): void{
    console.log($event);
  }

}
