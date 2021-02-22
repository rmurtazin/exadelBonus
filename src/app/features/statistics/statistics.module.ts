import { MatCheckboxModule } from '@angular/material/checkbox';
import { DatepickerModule } from './../../shared/components/datepicker/datepicker.module';
import { SharedModule } from './../../shared/shared.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { StatisticsComponent } from './statistics.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

@NgModule({
  declarations: [StatisticsComponent],
  imports: [
    RouterModule.forChild([
      { path: '', component: StatisticsComponent, data: { roles: ['admin'] } },
    ]),
    SharedModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    DatepickerModule,
    MatCheckboxModule,
  ],
  exports: [StatisticsComponent],
})
export class StatisticsModule {}
