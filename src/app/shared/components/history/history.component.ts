import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {
  isForm: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  public bonusButtonClicked(): void {
    this.isForm = !this.isForm;
  }
}
