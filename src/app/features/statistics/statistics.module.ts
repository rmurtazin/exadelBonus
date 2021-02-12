import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { StatisticsComponent } from './statistics.component';

@NgModule({
  declarations: [StatisticsComponent],
  imports: [
    RouterModule.forChild([
      { path: '', component: StatisticsComponent, data: { roles: ['admin'] } },
    ]),
  ],
  exports: [StatisticsComponent],
})
export class StatisticsModule {}
