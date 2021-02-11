import { ChangeDetectionStrategy, Component, DoCheck, Input, OnInit } from '@angular/core';
import { IBonus } from '@interfaces/bonus.interface';
import { BonusesService } from '@services/bonuses.service';
import { ChangeDetectorRef } from '@angular/core';
import { IUser } from '@interfaces/loginInterface';
import { LoginService } from '@services/login.service';

@Component({
  selector: 'app-bonus',
  templateUrl: './bonus.component.html',
  styleUrls: ['./bonus.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BonusComponent implements DoCheck, OnInit {
  @Input() bonusButtonClick: () => void;
  @Input() bonus: IBonus;

  public user: IUser;
  public isModeratorOrAdmin = false;
  public isForm = false;
  public loadingProcess = {
    start: false,
    end: false,
    endLoading(): void {
      this.start = false;
      this.end = true;
    },
    reset(): void {
      this.start = false;
      this.end = false;
    },
  };

  constructor(
    private bonusesService: BonusesService,
    private changeDetection: ChangeDetectorRef,
    private loginService: LoginService,
  ) {}

  ngOnInit(): void {
    this.user = this.loginService.getUser();
    if (this.user ?? false) {
      this.isModeratorOrAdmin = this.user.role === 'admin' || this.user.role === 'moderator';
    }
  }

  ngDoCheck(): void {
    console.log('bonus check');
  }

  public onBonusButtonClick(): void {
    this.bonusButtonClick();
  }

  public rate(rating: number): void {
    console.log(rating);
    this.loadingProcess.start = true;
    const bonusRateSubscription = this.bonusesService
      .rate(this.bonus.id, Math.floor(rating / 10))
      .subscribe((newBonus: IBonus) => {
        this.bonus.rating = newBonus.rating;
        this.successRate();
        bonusRateSubscription.unsubscribe();
      });
  }

  public successRate(): void {
    this.loadingProcess.endLoading();
    this.changeDetection.detectChanges();
    setTimeout(() => {
      this.loadingProcess.reset();
      this.isForm = false;
      this.changeDetection.detectChanges();
    }, 1000);
}
}
