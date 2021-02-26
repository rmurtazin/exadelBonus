import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HistoryComponent } from './history.component';

@NgModule({
  declarations: [HistoryComponent],
  imports: [
    RouterModule.forChild([
      { path: '', component: HistoryComponent },
    ]),
  ],
  exports: [HistoryComponent],
})
export class HistoryModule {}
