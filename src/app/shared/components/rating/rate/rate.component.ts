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
import { BonusesService } from '@services/bonuses.service';
import { ToasterService } from '@services/toaster.service';
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

  constructor(private bonusesService: BonusesService, private toasterService: ToasterService) {}

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
    this.bonusesService
      .rate(this.bonus.id, Math.floor(this.bonus.rating / 10))
      .pipe(take(1))
      .subscribe((newBonus: IBonus) => {
        this.animationStart = false;
        this.bonus = newBonus;
        this.toasterService.showNotification('rateForm.notification.success', 'success');
        this.backToBonusEvent.emit();
      });
  }

  public backToBonus(): void {
    this.bonus.rating = this.bonusUnchangedRating;
    this.backToBonusEvent.emit();
  }
}
