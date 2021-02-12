import { Component } from '@angular/core';
import { FilterService } from '@services/filter.service';

@Component({
  selector: 'app-sort-container',
  templateUrl: './sort-container.component.html',
  styleUrls: ['./sort-container.component.scss'],
})
export class SortContainerComponent {
  constructor(private filterService: FilterService) {}

  public sortBy(sortType: string): void {
    this.filterService.addSortToQuery(sortType);
  }
}
