import { Component, OnDestroy, OnInit } from '@angular/core';
import { IHistoryBonus } from '@interfaces/history.interface';
import { HistoryService } from '@services/history.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss'],
})
export class HistoryComponent implements OnInit, OnDestroy {
  public subscription: Subscription = new Subscription();
  public bonuses: IHistoryBonus[] = [];

  constructor(private historyService: HistoryService) {}

  ngOnInit(): void {
    this.getBonuses();
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public getBonuses(): void {
    this.subscription.add(
      this.historyService.getHistoryBonuses().subscribe((data) => {
        this.bonuses = data;
      }),
    );
  }

  public rateBonus(historyId: string, estimate: number): void {
    this.subscription.add(this.historyService.rateBonus(historyId, estimate).subscribe());
  }
}
