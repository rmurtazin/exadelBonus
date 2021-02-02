import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cluster-icon',
  templateUrl: './cluster-icon.component.html',
  styleUrls: ['./cluster-icon.component.scss']
})
export class ClusterIconComponent implements OnInit {
  @Input() public childCount: number;

  constructor() { }

  ngOnInit(): void {
  }

}
