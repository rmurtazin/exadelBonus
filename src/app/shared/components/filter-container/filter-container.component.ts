import { FilterService } from '@services/filter.service';
import { Component, OnInit } from '@angular/core';
import { LocationService } from '@services/location.service';

@Component({
  selector: 'app-filter-container',
  templateUrl: './filter-container.component.html',
  styleUrls: ['./filter-container.component.scss'],
})
export class FilterContainerComponent implements OnInit {
  constructor(private filterService: FilterService, private locationService: LocationService) {}

  public ngOnInit(): void{
    this.filterService.resetFilter();
  }

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
