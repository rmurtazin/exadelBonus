import { ChangeDetectionStrategy, Component, EventEmitter, Output, Input } from '@angular/core';
import { MatSliderChange } from '@angular/material/slider';
import { Observable } from 'rxjs';
import { BonusesService } from '@services/bonuses.service';
import { IBonus } from '@interfaces/bonus.interface';

@Component({
  selector: 'app-rate',
  templateUrl: './rate.component.html',
  styleUrls: ['./rate.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RateComponent {
  // @Input()
  isForm = true;
  @Output() ratingWasChanged = new EventEmitter<Observable<IBonus>>();
  @Input() rating: number;
  @Input() bonus: IBonus;

  rateUpdatedObservable: Observable<IBonus>;

  constructor(private bonusesService: BonusesService) {}

  public onMatSliderChange(slider: MatSliderChange): void {
    this.rating = slider.value / 100;
  }

  public rate(): void {
    // TODO: add animation here
    this.rateUpdatedObservable = this.bonusesService.rate(this.bonus.id, Math.floor(this.rating / 10));
    this.rateUpdatedObservable.subscribe(newBonus => this.bonus = newBonus);
    this.ratingWasChanged.emit(this.rateUpdatedObservable);
  }
}
