import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
  Input,
  OnInit,
} from '@angular/core';
import { MatSliderChange } from '@angular/material/slider';
import {IBonus} from '@interfaces/bonus.interface';

@Component({
  selector: 'app-rate',
  templateUrl: './rate.component.html',
  styleUrls: ['./rate.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RateComponent implements OnInit {
  @Input() isForm: boolean;
  @Output() ratingWasChanged = new EventEmitter<number>();
  @Input() bonus: IBonus;

  public startPosition: number;

  constructor() {}

  ngOnInit(): void {
    this.startPosition = this.bonus.rating * 10;
  }

  public onMatSliderChange(slider: MatSliderChange): void {
    this.bonus.rating = slider.value / 10;
  }

  public rate(): void {
    this.ratingWasChanged.emit(this.bonus.rating);
  }
}
