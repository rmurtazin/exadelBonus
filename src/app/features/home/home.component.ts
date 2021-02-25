import { Component, OnDestroy } from '@angular/core';
import { HistoryService } from '@services/history.service';
import { ToasterService } from '@services/toaster.service';
import { Subscription } from 'rxjs';
import { BonusComponent } from '../../shared/components/bonus-list-container/bonus/bonus.component';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmComponent } from './confirm/confirm.component';
import { IBonus } from '@interfaces/bonus.interface';
import { LoginService } from '@services/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnDestroy {
  public subscription: Subscription = new Subscription();
  public bonusButtonLabel = 'Apply';

  constructor(
    private historyService: HistoryService,
    private loginService: LoginService,
    private dialog: MatDialog,
  ) {}

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public openApplyForm({ bonus }: BonusComponent): void {
    const dialogRef = this.dialog.open(ConfirmComponent);
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
