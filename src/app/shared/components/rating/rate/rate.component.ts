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
  @Output() ratingWasSubmitted = new EventEmitter<IBonus>();

  public startPosition: number;
  public disableButton = false;
  public animationStart = false;

  constructor(private bonusesService: BonusesService, private toasterService: ToasterService) {}

  ngOnInit(): void {
    this.startPosition = this.bonus.rating * 10;
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
        this.toasterService.showSuccess('Your review has been added', 'Rated');
        this.bonus = newBonus;
        this.ratingWasSubmitted.emit();
      });
  }
}
