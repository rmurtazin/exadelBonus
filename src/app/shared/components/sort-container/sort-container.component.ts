import { Component } from '@angular/core';
import { MatRadioChange } from '@angular/material/radio';
import { FilterService } from '@services/filter.service';
import { MatSelectChange } from '@angular/material/select';

@Component({
  selector: 'app-sort-container',
  templateUrl: './sort-container.component.html',
  styleUrls: ['./sort-container.component.scss'],
})
export class SortContainerComponent {
  constructor(private filterService: FilterService) {}

  public sortValueChange($event: MatRadioChange | MatSelectChange): void {
    this.sortBy($event.value);
  }

  public sortBy(sortType: string): void {
    this.filterService.addSortToQuery(sortType);
  }
}
