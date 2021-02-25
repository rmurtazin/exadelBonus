import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
  Input,
  OnInit,
} from '@angular/core';
import { MatSliderChange } from '@angular/material/slider';
import { IBonus } from '@interfaces/bonus.interface';
import { IHistoryBonus } from '@interfaces/history.interface';
import { BonusesService } from '@services/bonuses.service';
import { HistoryService } from '@services/history.service';
import { ToasterService } from '@services/toaster.service';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-rate',
  templateUrl: './rate.component.html',
  styleUrls: ['./rate.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RateComponent implements OnInit {
  @Input() isForm: boolean;
  @Input() bonus: IBonus;
  @Output() backToBonusEvent = new EventEmitter<void>();

  public startPosition: number;
  public disableButton = false;
  public animationStart = false;
  private bonusUnchangedRating: number;
  public historyBonus: IHistoryBonus;

  constructor(private historyService: HistoryService) {}

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
    this.rateBonus(this.bonus);
  }

  public rateBonus(bonus): void {
    this.historyService.getHistoryBonuses().subscribe((data) => {
      const rate = Math.floor(bonus.rating);
      this.historyBonus = data.find((item) => item.bonus.id === bonus.id);
      this.historyService.rateBonus(this.historyBonus.id, rate).subscribe(() => {
        this.animationStart = false;
        this.bonus = bonus;
        this.backToBonusEvent.emit();
      });
    });
  }

  public backToBonus(): void {
    this.bonus.rating = this.bonusUnchangedRating;
    this.backToBonusEvent.emit();
  }
}
