import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared.module';
import { FilterService } from '@services/filter.service';
import { SortContainerComponent } from './sort-container.component';

@NgModule({
  declarations: [SortContainerComponent],
  imports: [SharedModule],
  providers: [FilterService],
  exports: [SortContainerComponent],
})
export class SortContainerModule {}
