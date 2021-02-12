import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StarsComponent {
  @Input() widthValue: number;

  constructor() {}
}
