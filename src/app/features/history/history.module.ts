import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HistoryComponent } from './history.component';

@NgModule({
  declarations: [HistoryComponent],
  imports: [
    RouterModule.forChild([
      { path: '', component: HistoryComponent, data: { roles: ['user', 'moderator', 'admin'] } },
    ]),
  ],
  exports: [HistoryComponent],
})
export class HistoryModule {}
