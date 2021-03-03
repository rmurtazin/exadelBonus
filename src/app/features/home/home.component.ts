import { Component, OnDestroy } from '@angular/core';
import { HistoryService } from '@services/history.service';
import { Subscription } from 'rxjs';
import { BonusComponent } from '../../shared/components/bonus-list-container/bonus/bonus.component';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmComponent } from './confirm/confirm.component';
import { LoginService } from '@services/login.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnDestroy {
  public subscription: Subscription = new Subscription();
  public bonusButtonLabel: string;

  constructor(
    private historyService: HistoryService,
    private loginService: LoginService,
    public dialog: MatDialog,
    private translate: TranslateService,
  ) {
    this.translate.get('home.details').subscribe(res=>this.bonusButtonLabel = res)
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public openApplyForm({ bonus }: BonusComponent): void {
    const dialogRef = this.dialog.open(ConfirmComponent, { data: bonus });
    this.subscription.add(
      dialogRef.afterClosed().subscribe((result) => {
        if (result) {
          this.onApplyBonus(bonus.id);
        }
      }),
    );
  }

  public onApplyBonus(bonusId: string): void {
    this.subscription.add(
      this.loginService.getUser().subscribe((user) => {
        const regBody = {
          userId: user.id,
          bonusId,
        };
        this.subscription.add(this.historyService.applyBonus(regBody).subscribe());
      }),
    );
  }
}
