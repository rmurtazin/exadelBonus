import { ChangeDetectorRef } from '@angular/core';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { IBonus } from '@interfaces/bonus.interface';
import { IHistoryBonus } from '@interfaces/history.interface';
import { TranslateService } from '@ngx-translate/core';
import { HistoryService } from '@services/history.service';
import { LoginService } from '@services/login.service';
import { ToasterService } from '@services/toaster.service';
import { Subscription } from 'rxjs';
import { BonusComponent } from 'src/app/shared/components/bonus-list-container/bonus/bonus.component';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss'],
})
export class HistoryComponent implements OnInit, OnDestroy {
  public subscription: Subscription = new Subscription();
  public historyBonuses: IHistoryBonus[] = [];
  public bonusHistory: IHistoryBonus;
  public bonuses: IBonus[] = [];
  public bonusButtonLabel: string;
  public loading = false;

  constructor(
    private historyService: HistoryService,
    private loginService: LoginService,
    private translate: TranslateService,
    private changeDetector: ChangeDetectorRef,
    private toasterService: ToasterService,
  ) {}

  ngOnInit(): void {
    this.getBonuses();
    this.getButtonLabel();
    this.subscription.add(
      this.translate.onLangChange.subscribe(() => {
        this.getButtonLabel();
        this.runChangeDetection();
      }),
    );
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private runChangeDetection(): void {
    this.changeDetector.detectChanges();
  }

  private getButtonLabel(): void {
    this.translate.get('home.rate').subscribe((res) => (this.bonusButtonLabel = res));
  }

  public getBonuses(): void {
    this.loading = true;
    this.loginService.getUser().subscribe((data) => {
      this.subscription.add(
        this.historyService.getHistoryBonuses(data.id).subscribe((bonuses) => {
          if (bonuses.length === 0) {
            this.toasterService.showNotification('history.notification.noBonuses', 'success');
          }
          this.historyBonuses = bonuses;
          this.bonuses = bonuses.map((item) => item.bonusDto);
          this.loading = false;
        }),
      );
    });
  }

  public rateBonus(historyId: string, estimate: number): void {
    this.subscription.add(this.historyService.rateBonus(historyId, estimate).subscribe());
  }

  public openRateBonusForm(bonus: BonusComponent): void {
    this.bonusHistory = this.historyBonuses.find((item) => item.bonusDto.id === bonus.bonus.id);
    bonus.isForm = !bonus.isForm;
  }
}
