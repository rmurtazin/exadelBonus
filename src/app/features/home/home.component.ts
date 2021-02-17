import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public isForm: boolean;

  constructor() {}

  ngOnInit(): void {}

  public onBonusButtonClick(): void {
    this.isForm = !this.isForm;
  }
}
