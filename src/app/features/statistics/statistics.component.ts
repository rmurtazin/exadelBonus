import { IVendor } from '@interfaces/add-bonus.interface';
import { VendorsService } from '@services/vendors.service';
import { ToasterService } from '@services/toaster.service';
import { StatisticsService } from '@services/statistics.service';
import { Subscription } from 'rxjs';
import { StatisticElement } from '@interfaces/statistics.interface';
import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { format } from 'date-fns';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss'],
})
export class StatisticsComponent implements OnInit, OnDestroy {
  private subscriptionStatistics: Subscription;
  private subscriptionVendor: Subscription;
  public vendors: IVendor[] = [];
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
    vendorId: '',
    bonus: '',
    type: '',
    isActive: true,
    start: '',
    end: '',
  };

  @ViewChild(MatPaginator) public paginator: MatPaginator;
  @ViewChild(MatSort) public sort: MatSort;

  constructor(
    private statisticsService: StatisticsService,
    private toasterService: ToasterService,
    private vendorsService: VendorsService,
  ) {}

  public ngOnInit(): void {
    this.getStatistics();
  }

  public getStatistics(): void {
    this.subscriptionStatistics = this.statisticsService.getStatistics(this.queryParams).subscribe(
      (data: StatisticElement[]) => {
        if (data) {
          this.statistics = data;
          this.formatDates();
          this.dataSource = new MatTableDataSource<StatisticElement>(this.statistics);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        }
      },
      (err) => this.toasterService.showError(err, 'Some problems with getting statistics'),
    );
  }

  public formatDates(): void {
    this.statistics.forEach((e) => {
      e.dateStart = format(new Date(e.dateStart), 'yyyy/MM/dd');
      e.dateEnd = format(new Date(e.dateEnd), 'yyyy/MM/dd');
      e.createdDate = format(new Date(e.createdDate), 'yyyy/MM/dd');
    });
  }

  public applyFilter(filterValue: string): void {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  public applyFilters(): void {
    this.filterParams.bonus = this.filterParams.bonus.replace(/\s+/g, ' ').trim();
    this.filterParams.type = this.filterParams.type.replace(/\s+/g, ' ').trim();
    this.filterParams.start = this.dateStart ?? '';
    this.filterParams.end = this.dateEnd ?? '';

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
      vendorId: '',
      bonus: '',
      type: '',
      isActive: true,
      start: this.dateStart ?? '',
      end: this.dateEnd ?? '',
    };
    this.queryParams = '';

    this.getStatistics();
  }

  public vendorNameChange(): void {
    if (this.filterParams.vendor !== '') {
      this.filterParams.vendor = this.filterParams.vendor.replace(/\s+/g, ' ').trim();
      this.getVendors(this.filterParams.vendor);
    }
  }

  public getVendors(query): void {
    this.subscriptionVendor = this.vendorsService.getVendors(query).subscribe(
      (data: IVendor[]) => {
        if (data) {
          this.vendors = data;
        }
      },
      (err) => this.toasterService.showError(err, 'Some problems with getting vendors'),
    );
  }

  public ngOnDestroy(): void {
    this.subscriptionStatistics.unsubscribe();
    this.subscriptionVendor.unsubscribe();
  }

  public setVendorId(id: string): void {
    this.filterParams.vendorId = id;
  }
}
