import {ChangeDetectionStrategy, Component, DoCheck, Input} from '@angular/core';

@Component({
  selector: 'app-rate',
  templateUrl: './rate.component.html',
  styleUrls: ['./rate.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RateComponent implements DoCheck {
  @Input() widthValue;

  constructor() { }

  ngDoCheck(): void {
    console.log('Check rate ' + this.widthValue);
  }
}
