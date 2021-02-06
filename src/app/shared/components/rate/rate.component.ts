import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

@Component({
  selector: 'app-rate',
  templateUrl: './rate.component.html',
  styleUrls: ['./rate.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RateComponent {
  @Input() widthValue: number;

  constructor() { }
}
