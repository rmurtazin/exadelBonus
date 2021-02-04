import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-marker-icon',
  templateUrl: './marker-icon.component.html',
  styleUrls: ['./marker-icon.component.scss'],
})
export class MarkerIconComponent {
  @Input() public icon: string;
}
