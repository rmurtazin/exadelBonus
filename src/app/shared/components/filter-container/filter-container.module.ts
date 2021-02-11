import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterContainerComponent } from './filter-container.component';
import { CityInputModule } from '../city-input/city-input.module';
import { TagsInputModule } from '../tags-input/tags-input.module';
import { DatepickerModule } from '../datepicker/datepicker.module';
import { SharedModule } from '../../shared.module';
import { FilterService } from '@services/filter.service';

@NgModule({
  declarations: [FilterContainerComponent],
  imports: [SharedModule, CityInputModule, TagsInputModule, DatepickerModule],
  providers: [FilterService],
  exports: [FilterContainerComponent],
})
export class FilterContainerModule {}
