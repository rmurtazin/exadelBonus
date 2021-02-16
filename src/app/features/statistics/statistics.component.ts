import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface StatisticElement {
  position: number;
  vendor: string;
  bonus: string;
  dateStart: Date | string;
  dateEnd: Date | string;
  dateAdd: Date | string;
  rating: number;
  visits: number;
  city: string;
  country: string;
  type: string;
  isActive: number;
}

const ELEMENT_DATA: StatisticElement[] = [
  // TODO: add get request
  {
    position: 1,
    vendor: 'Pizza mania',
    bonus: 'Pizza',
    dateStart: '2020-02-01',
    dateEnd: '2020-06-30',
    dateAdd: '2020-01-17',
    rating: 4,
    visits: 10,
    city: 'Minsk',
    country: 'Belarus',
    type: 'food',
    isActive: 1,
  },
  {
    position: 2,
    vendor: 'Pizza mania',
    bonus: 'Sushi',
    dateStart: '2020-04-01',
    dateEnd: '2020-06-30',
    dateAdd: '2020-02-17',
    rating: 2,
    visits: 3,
    city: 'Minsk',
    country: 'Belarus',
    type: 'food',
    isActive: 1,
  },
  {
    position: 3,
    vendor: 'Cinema October',
    bonus: 'tickets',
    dateStart: '2020-02-01',
    dateEnd: '2020-06-30',
    dateAdd: '2020-01-17',
    rating: 5,
    visits: 100,
    city: 'Minsk',
    country: 'Belarus',
    type: 'cinema',
    isActive: 1,
  },
  {
    position: 4,
    vendor: 'Shina Vitebsk',
    bonus: 'Shina service',
    dateStart: '2020-03-01',
    dateEnd: '2020-12-31',
    dateAdd: '2020-01-01',
    rating: 2,
    visits: 17,
    city: 'Vitebsk',
    country: 'Belarus',
    type: 'service',
    isActive: 1,
  },
  {
    position: 5,
    vendor: 'Pizza mania',
    bonus: 'Pizza',
    dateStart: '2020-02-01',
    dateEnd: '2020-06-30',
    dateAdd: '2020-01-17',
    rating: 4,
    visits: 10,
    city: 'Minsk',
    country: 'Belarus',
    type: 'food',
    isActive: 1,
  },
  {
    position: 6,
    vendor: 'Pizza mania',
    bonus: 'Pizza',
    dateStart: '2020-02-01',
    dateEnd: '2020-06-30',
    dateAdd: '2020-01-17',
    rating: 4,
    visits: 10,
    city: 'Minsk',
    country: 'Belarus',
    type: 'food',
    isActive: 1,
  },
  {
    position: 7,
    vendor: 'Pizza mania',
    bonus: 'Sushi',
    dateStart: '2020-04-01',
    dateEnd: '2020-06-30',
    dateAdd: '2020-02-17',
    rating: 2,
    visits: 3,
    city: 'Minsk',
    country: 'Belarus',
    type: 'food',
    isActive: 1,
  },
  {
    position: 8,
    vendor: 'Cinema October',
    bonus: 'tickets',
    dateStart: '2020-02-01',
    dateEnd: '2020-06-30',
    dateAdd: '2020-01-17',
    rating: 5,
    visits: 100,
    city: 'Minsk',
    country: 'Belarus',
    type: 'cinema',
    isActive: 1,
  },
  {
    position: 9,
    vendor: 'Shina Vitebsk',
    bonus: 'Shina service',
    dateStart: '2020-03-01',
    dateEnd: '2020-12-31',
    dateAdd: '2020-01-01',
    rating: 2,
    visits: 17,
    city: 'Vitebsk',
    country: 'Belarus',
    type: 'service',
    isActive: 1,
  },
  {
    position: 10,
    vendor: 'Pizza mania',
    bonus: 'Pizza',
    dateStart: '2020-02-01',
    dateEnd: '2020-06-30',
    dateAdd: '2020-01-17',
    rating: 4,
    visits: 10,
    city: 'Minsk',
    country: 'Belarus',
    type: 'food',
    isActive: 1,
  },
  {
    position: 11,
    vendor: 'Pizza mania',
    bonus: 'Pizza',
    dateStart: '2020-02-01',
    dateEnd: '2020-06-30',
    dateAdd: '2020-01-17',
    rating: 4,
    visits: 10,
    city: 'Minsk',
    country: 'Belarus',
    type: 'food',
    isActive: 1,
  },
  {
    position: 12,
    vendor: 'Pizza mania',
    bonus: 'Sushi',
    dateStart: '2020-04-01',
    dateEnd: '2020-06-30',
    dateAdd: '2020-02-17',
    rating: 2,
    visits: 3,
    city: 'Minsk',
    country: 'Belarus',
    type: 'food',
    isActive: 1,
  },
  {
    position: 13,
    vendor: 'Cinema October',
    bonus: 'tickets',
    dateStart: '2020-02-01',
    dateEnd: '2020-06-30',
    dateAdd: '2020-01-17',
    rating: 5,
    visits: 100,
    city: 'Minsk',
    country: 'Belarus',
    type: 'cinema',
    isActive: 1,
  },
  {
    position: 14,
    vendor: 'Shina Vitebsk',
    bonus: 'Shina service',
    dateStart: '2020-03-01',
    dateEnd: '2020-12-31',
    dateAdd: '2020-01-01',
    rating: 2,
    visits: 17,
    city: 'Vitebsk',
    country: 'Belarus',
    type: 'service',
    isActive: 1,
  },
  {
    position: 15,
    vendor: 'Pizza mania',
    bonus: 'Pizza',
    dateStart: '2020-02-01',
    dateEnd: '2020-06-30',
    dateAdd: '2020-01-17',
    rating: 4,
    visits: 10,
    city: 'Minsk',
    country: 'Belarus',
    type: 'food',
    isActive: 1,
  },
];

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss'],
})
export class StatisticsComponent implements AfterViewInit {
  public displayedColumns: string[] = [
    'position',
    'vendor',
    'bonus',
    'dateAdd',
    'dateStart',
    'dateEnd',
    'rating',
    'visits',
    'city',
    'country',
    'type',
    'isActive',
  ];
  public dataSource = new MatTableDataSource<StatisticElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) public paginator: MatPaginator;
  @ViewChild(MatSort) public sort: MatSort;

  public ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  public applyFilter(filterValue: string): void {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
