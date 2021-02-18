import { IVendor } from '@interfaces/add-bonus.interface';
import { VendorsService } from '@services/vendors.service';
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
  private subscriptionVendor: Subscription;
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
  public dateStart = '';
  public dateEnd = '';
  public queryParams = '';
  public filterParams = {
    vendor: '',
    bonus: '',
    type: '',
    isActive: '',
    start: '',
    end: '',
  };

  @ViewChild(MatPaginator) public paginator: MatPaginator;
  @ViewChild(MatSort) public sort: MatSort;

  constructor(
    public statisticsService: StatisticsService,
    public toasterService: ToasterService,
    public vendorsService: VendorsService,
  ) {}

  public ngOnInit(): void {
    this.getStatistics();
  }

  public ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  public getStatistics(): void {
    this.subscriptionStatistics = this.statisticsService.getStatistics(this.queryParams).subscribe(
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

  public applyFilters(): void {
    const vendorName = (document.getElementById('vendor') as HTMLInputElement).value
      .replace(/\s+/g, ' ')
      .trim();
    let vendorId = '';
    if (vendorName !== '') {
      this.subscriptionVendor = this.vendorsService
        .getVendorByName(vendorName)
        .subscribe((data: IVendor) => {
          if (data) {
            vendorId = data.id;
          }
        });
    }

    this.filterParams = {
      vendor: vendorId,
      bonus: (document.getElementById('bonus') as HTMLInputElement).value
        .replace(/\s+/g, ' ')
        .trim(),
      type: (document.getElementById('type') as HTMLInputElement).value.replace(/\s+/g, ' ').trim(),
      isActive: (document.getElementById('isActive') as HTMLInputElement).value
        .replace(/\s+/g, ' ')
        .trim(),
      start: this.dateStart ?? '',
      end: this.dateEnd ?? '',
    };

    this.queryParams = this.statisticsService.buildLink(this.filterParams);

    this.getStatistics();
  }

  public changeDate(date: any): void {
    this.dateStart = date?.start && new Date(date.start).toISOString();
    this.dateEnd = date?.end && new Date(date.end).toISOString();
  }

  public clearFilters(): void {
    this.filterParams = {
      vendor: '',
      bonus: '',
      type: '',
      isActive: '',
      start: this.dateStart ?? '',
      end: this.dateEnd ?? '',
    };
    this.queryParams = '';

    (document.getElementById('vendor') as HTMLInputElement).value = '';
    (document.getElementById('bonus') as HTMLInputElement).value = '';
    (document.getElementById('type') as HTMLInputElement).value = '';
    (document.getElementById('isActive') as HTMLInputElement).value = '';

    this.getStatistics();
  }
}
