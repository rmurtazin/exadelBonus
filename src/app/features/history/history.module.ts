import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HistoryComponent } from './history.component';
import { BonusListContainerModule } from 'src/app/shared/components/bonus-list-container/bonus-list-container.module';

@NgModule({
  declarations: [HistoryComponent],
  imports: [
    BonusListContainerModule,
    RouterModule.forChild([
      { path: '', component: HistoryComponent, data: { roles: ['user', 'moderator', 'admin'] } },
    ]),
  ],
  exports: [HistoryComponent],
})
export class HistoryModule {}
