import { ToasterService } from '@services/toaster.service';
import { StatisticsService } from '@services/statistics.service';
import { Subscription } from 'rxjs';
import { StatisticElement } from '@interfaces/statistics.interface';
import { Component, ViewChild, AfterViewInit, OnInit, OnDestroy } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss'],
})
export class StatisticsComponent implements AfterViewInit, OnInit, OnDestroy {
  private subscriptionStatistics: Subscription;
  public statistics: StatisticElement[] = [];
  public displayedColumns: string[] = [
    'companyName',
    'title',
    'createdDate',
    'dateStart',
    'dateEnd',
    'rating',
    'visits',
    'type',
    'isActive',
  ];
  public dataSource = new MatTableDataSource<StatisticElement>(this.statistics);

  @ViewChild(MatPaginator) public paginator: MatPaginator;
  @ViewChild(MatSort) public sort: MatSort;

  constructor(
    public statisticsService: StatisticsService,
    public toasterService: ToasterService,
  ) {}

  public ngOnInit(): void {
    this.getStatistics();
  }

  public ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  public getStatistics(): void {
    this.subscriptionStatistics = this.statisticsService.getStatistics().subscribe(
      (data: StatisticElement[]) => {
        if (data) {
          this.statistics = data;
          this.dataSource = new MatTableDataSource<StatisticElement>(this.statistics);
        }
      },
      (err) => this.toasterService.showError(err, 'Some problems with getting statistics'),
    );
  }

  public applyFilter(filterValue: string): void {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  public ngOnDestroy(): void {
    this.subscriptionStatistics.unsubscribe();
  }
}
