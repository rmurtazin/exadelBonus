import { SharedModule } from './../../shared.module';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { DatepickerComponent } from './datepicker.component';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [DatepickerComponent],
  imports: [MatDatepickerModule, SharedModule],
  exports: [DatepickerComponent],
})
export class DatepickerModule {}
