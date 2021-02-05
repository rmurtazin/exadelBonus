import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cluster-icon',
  templateUrl: './cluster-icon.component.html',
  styleUrls: ['./cluster-icon.component.scss'],
})
export class ClusterIconComponent {
  @Input() public childCount: number;
}
