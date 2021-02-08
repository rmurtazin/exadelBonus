import { Input, Output } from '@angular/core';
import { Component, EventEmitter, OnInit } from '@angular/core';
import { Languages } from '@enums/languages.enum';

@Component({
  selector: 'app-add-bonus-button',
  templateUrl: './add-bonus-button.component.html',
  styleUrls: ['./add-bonus-button.component.scss'],
})
export class AddBonusButtonComponent {
  @Output() openForm = new EventEmitter<boolean>();
  public onOpenForm(): void {
    this.openForm.emit(true);
  }
}
