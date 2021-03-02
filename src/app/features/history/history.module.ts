import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HistoryComponent } from './history.component';
import { BonusListContainerModule } from 'src/app/shared/components/bonus-list-container/bonus-list-container.module';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [HistoryComponent],
  imports: [
    BonusListContainerModule,
    RouterModule.forChild([{ path: '', component: HistoryComponent }]),
    CommonModule,
    MatProgressSpinnerModule
  ],
  exports: [HistoryComponent],
})
export class HistoryModule {}
