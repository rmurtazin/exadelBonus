import { Component } from '@angular/core';
import { HistoryService } from '@services/history.service';
import { Subscription } from 'rxjs';
import { BonusComponent } from '../../shared/components/bonus-list-container/bonus/bonus.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  public subscription: Subscription = new Subscription();
  public bonusButtonLabel = 'Apply';

  constructor(private historyService: HistoryService) {}

  public openApplyForm({ bonus }: BonusComponent): void {
    const reg = {
      userId: 'bca3130d-72ea-4177-9334-112dc498ad78', // TODO: get user id
      bonusId: bonus.id,
    };
    this.subscription.add(this.historyService.applyBonus(reg).subscribe());
  }
}
