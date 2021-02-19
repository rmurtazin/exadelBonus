import { FilterService } from '@services/filter.service';
import { Component } from '@angular/core';
import { LocationService } from '@services/location.service';

@Component({
  selector: 'app-filter-container',
  templateUrl: './filter-container.component.html',
  styleUrls: ['./filter-container.component.scss'],
})
export class FilterContainerComponent {
  constructor(private filterService: FilterService, private locationService: LocationService) {}

  public changeCity(city: string): void {
    this.locationService.moveToCityLocation(city);
    this.filterService.addCityToQuery(city);
  }

  public changeDate(date: any): void {
    this.filterService.addDateToQuery(date);
  }

  public tagsChanged(tags: string[]): void {
    this.filterService.addTagsToQuery(tags);
  }
}
