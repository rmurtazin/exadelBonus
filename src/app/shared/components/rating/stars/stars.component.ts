import {ChangeDetectionStrategy, Component, DoCheck, Input} from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StarsComponent implements DoCheck {
  @Input() widthValue: number;

  ngDoCheck(): void {
    console.log('sdsdsds'
    );
  }

  constructor() {}
}
