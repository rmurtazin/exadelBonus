import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-marker-icon',
  templateUrl: './marker-icon.component.html',
  styleUrls: ['./marker-icon.component.scss']
})
export class MarkerIconComponent implements OnInit {
  @Input() public icon: string;

  public ngOnInit(): void {}

}
