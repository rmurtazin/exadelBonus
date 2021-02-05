import { Input, Output } from '@angular/core';
import { Component, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-bonus-button',
  templateUrl: './add-bonus-button.component.html',
  styleUrls: ['./add-bonus-button.component.scss']
})
export class AddBonusButtonComponent implements OnInit {
  @Output() openForm = new EventEmitter<boolean>();

  public onOpenForm(): void {
    this.openForm.emit(true);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
