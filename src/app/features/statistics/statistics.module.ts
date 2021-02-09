import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatisticsComponent } from './statistics.component';

@NgModule({
  declarations: [StatisticsComponent],
  imports: [CommonModule],
  exports: [StatisticsComponent],
})
export class StatisticsModule {}
