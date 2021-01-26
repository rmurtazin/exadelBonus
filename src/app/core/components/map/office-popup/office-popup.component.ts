import { Component, Input, OnInit } from '@angular/core';
import { IOffice } from '@interfaces/office.interface';

@Component({
  selector: 'app-office-popup',
  templateUrl: './office-popup.component.html',
  styleUrls: ['./office-popup.component.scss']
})
export class OfficePopupComponent implements OnInit {

  @Input() public data: IOffice;

  constructor() { }

  ngOnInit(): void {}

  public log(): void{
    console.log(this.data);
  }

}
