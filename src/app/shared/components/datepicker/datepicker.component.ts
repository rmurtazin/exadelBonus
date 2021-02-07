import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { IDateRange } from '@interfaces/dateRange.interface';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss'],
})
export class DatepickerComponent {
  public range: FormGroup = new FormGroup({
    start: new FormControl(),
    end: new FormControl(),
  });

  @Output() changeDate = new EventEmitter<IDateRange>();

  constructor() {}

  public onDateChange(): void {
    this.changeDate.emit(this.range.getRawValue());
  }
}
