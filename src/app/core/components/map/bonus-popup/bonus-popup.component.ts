import { Component, Input, OnInit } from '@angular/core';
import { IBonus } from '@interfaces/bonus.interface';

@Component({
  selector: 'app-bonus-popup',
  templateUrl: './bonus-popup.component.html',
  styleUrls: ['./bonus-popup.component.scss']
})
export class BonusPopupComponent implements OnInit {

  @Input() public bonus: IBonus;
  @Input() public latitude: number;
  @Input() public longitude: number;
  public markerLink: string;


  public ngOnInit(): void {
    this.markerLink = `http://localhost:4200/home/?lat=${this.latitude}&lon=${this.longitude}`;
  }

  public log($event): void{
    console.log($event);
  }

}
