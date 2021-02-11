import { NgModule } from '@angular/core';
import { ChoosePlaceDialogComponent } from './choose-place-dialog.component';
import { SharedModule } from '../../shared.module';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [ChoosePlaceDialogComponent],
  exports: [ChoosePlaceDialogComponent],
  imports: [SharedModule, MatRadioModule, MatSelectModule],
})
export class ChoosePlaceDialogModule {}
