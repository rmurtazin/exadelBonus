import { Component, Input } from '@angular/core';
import { IBonus } from '@interfaces/bonus.interface';
import { MarkerEventsService } from '@services/markers-events.service';

@Component({
  selector: 'app-bonus-popup',
  templateUrl: './bonus-popup.component.html',
  styleUrls: ['./bonus-popup.component.scss'],
})
export class BonusPopupComponent {
  @Input() public bonus: IBonus;

  constructor(private markerEventsService: MarkerEventsService) {}

  public showBonusMap(): void {
    console.log(this.bonus);
    this.markerEventsService.bonusMarkerClick(this.bonus);
  }
}
