import { EventEmitter, Input, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { IBonusFormConfig, IVendor } from '@interfaces/add-bonus.interface';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';

@Component({
  selector: 'app-bonus-searcher',
  templateUrl: './bonus-searcher.component.html',
  styleUrls: ['./bonus-searcher.component.scss'],
})
export class BonusSearcherComponent implements OnInit {
  @Input() bonusFormConfig: IBonusFormConfig;
  @Input() vendors: IVendor[];
  @Output() getBonusesByVendorId = new EventEmitter<any>();
  public searcher: FormGroup;
  public vendorName: FormControl;
  public filteredVendors: Observable<IVendor[]>;

  constructor() {}

  ngOnInit(): void {
    this.searcher = new FormGroup({
      name: (this.vendorName = new FormControl('')),
    });
    this.onFilterVendors();
  }

  public onFilterVendors(): void {
    this.filteredVendors = this.vendorName.valueChanges.pipe(
      startWith(''),
      map((value) => (typeof value === 'string' ? value : '')),
      map((name) => (name ? this._filter(name) : this.vendors?.slice())),
    );
  }

  public onVendorNameChange(vendorName: any): void {
    this.bonusFormConfig.vendorNameChange(vendorName);
    if (vendorName.id) {
      this.getBonusesByVendorId.emit(vendorName.id);
    }
  }

  public displayVendors(vendor: IVendor): string {
    return vendor.name || '';
  }

  private _filter(vendor: string): IVendor[] {
    const filterValue = vendor.toLowerCase();
    return this.vendors.filter((item) => item.name.toLowerCase().indexOf(filterValue) === 0);
  }
}
