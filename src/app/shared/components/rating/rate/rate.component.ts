import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
  Input,
  OnInit,
  OnDestroy,
} from '@angular/core';
import { MatSliderChange } from '@angular/material/slider';
import { IBonus } from '@interfaces/bonus.interface';
import { IHistoryBonus } from '@interfaces/history.interface';
import { HistoryService } from '@services/history.service';
import { LoginService } from '@services/login.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-rate',
  templateUrl: './rate.component.html',
  styleUrls: ['./rate.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RateComponent implements OnInit, OnDestroy {
  @Input() isForm: boolean;
  @Input() bonus: IBonus;
  @Output() backToBonusEvent = new EventEmitter<void>();

  public subscription: Subscription = new Subscription();
  public startPosition: number;
  public disableButton = false;
  public animationStart = false;
  private bonusUnchangedRating: number;
  public historyBonus: IHistoryBonus;

  constructor(private historyService: HistoryService, private loginService: LoginService) {}

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    this.startPosition = this.bonus?.rating * 10;
    this.bonusUnchangedRating = this.bonus?.rating;
  }

  public onMatSliderChange(slider: MatSliderChange): void {
    this.bonus.rating = slider.value / 10;
  }

  public submitRating(): void {
    this.disableButton = true;
    this.animationStart = true;
    this.onRateBonus(this.bonus);
    this.backToBonusEvent.emit();
  }

  public onRateBonus(bonus: IBonus): void {
    this.loginService.getUser().subscribe((data) => {
      this.subscription.add(
        this.historyService.getHistoryBonuses(data.id).subscribe((bonuses) => {
          const rate = Math.floor(bonus.rating);
          this.historyBonus = bonuses.find((item) => item.bonusDto.id === bonus.id);
          this.rateBonus(bonus, rate);
        }),
      );
    });
  }

  public rateBonus(bonus: IBonus, rate: number): void {
    this.subscription.add(
      this.historyService.rateBonus(this.historyBonus.historyId, rate).subscribe(() => {
        this.animationStart = false;
        this.bonus = bonus;
      }),
    );
  }

  public backToBonus(): void {
    this.bonus.rating = this.bonusUnchangedRating;
    this.backToBonusEvent.emit();
  }

  public getUnchangedRating(): number {
    return this.bonusUnchangedRating;
  }
}
