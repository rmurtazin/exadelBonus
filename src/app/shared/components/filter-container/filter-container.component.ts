import { FilterService } from '@services/filter.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-filter-container',
  templateUrl: './filter-container.component.html',
  styleUrls: ['./filter-container.component.scss'],
})
export class FilterContainerComponent {
  constructor(private filterService: FilterService) {}

  public changeCity(city: string): void {
    this.filterService.addCityToQuery(city);
  }

  public changeDate(date: any): void {
    this.filterService.addDateToQuery(date);
  }

  public tagsChanged(tags: string[]): void {
    this.filterService.addTagsToQuery(tags);
  }
}
