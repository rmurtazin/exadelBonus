import { ENTER, COMMA } from '@angular/cdk/keycodes';
import { Input } from '@angular/core';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';
import { Router } from '@angular/router';
import { ILocation, ITag, IVendor } from '@interfaces/add-bonus.interface';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-add-bonus-form',
  templateUrl: './add-bonus-form.component.html',
  styleUrls: ['./add-bonus-form.component.scss'],
})
export class AddBonusFormComponent implements OnInit {
  @Output() addAddress = new EventEmitter<any>();
  @Output() closeForm = new EventEmitter<boolean>();
  @Output() vendorNameChange = new EventEmitter<any>();
  @Output() createNewVendor = new EventEmitter<any>();
  @Input() locations: ILocation[];
  @Input() vendors: IVendor[];
  public myForm: FormGroup;
  public vendorName: FormControl;
  public vendorEmail: FormControl;
  public range: FormGroup;
  public visible = true;
  public selectable = true;
  public removable = true;
  public addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  public bonusTags: ITag[] = [];
  filteredVendors: Observable<IVendor[]>;

  constructor(private router: Router) {}

  public ngOnInit(): void {
    this.onInitForm();
    this.filteredVendors = this.vendorName.valueChanges.pipe(
      startWith(''),
      map((value) => (typeof value === 'string' ? value : value.name)),
      map((name) => (name ? this._filter(name) : this.vendors.slice())),
    );
  }

  onVendorNameChange(vendorName: any): void {
    this.vendorNameChange.emit(vendorName);
    if (vendorName.vendorId) {
      return this.myForm.get('vendorEmail').setValue(vendorName.vendorEmail);
    }
    this.myForm.get('vendorEmail').reset();
  }

  onGetNewVendor(event: any): void {
    this.createNewVendor.emit(event.target.value);
  }

  displayFn(vendor: IVendor): string {
    return vendor && vendor.vendorName ? vendor.vendorName : '';
  }

  private _filter(vendor: string): IVendor[] {
    const filterValue = vendor.toLowerCase();

    return this.vendors.filter(
      (vendor) => vendor.vendorName.toLowerCase().indexOf(filterValue) === 0,
    );
  }

  public onAddAddress(myForm: any): void {
    this.addAddress.emit(myForm);
  }

  public goBack(): void {
    this.closeForm.emit(false);
  }

  public onInitForm(): void {
    this.myForm = new FormGroup({
      vendorName: (this.vendorName = new FormControl('', [Validators.required])),
      bonusAddress: new FormControl('', [Validators.required]),
      bonusType: new FormControl('', [Validators.required]),
      bonusDescription: new FormControl('', [Validators.required]),
      bonusTags: new FormControl('', [Validators.required]),
      bonusTitle: new FormControl('', [Validators.required]),
      vendorEmail: (this.vendorEmail = new FormControl(this.vendorEmail, [
        Validators.required,
        Validators.email,
      ])),
      phone: new FormControl('', [Validators.required]),
      bonusDateRange: (this.range = new FormGroup({
        start: new FormControl('', [Validators.required]),
        end: new FormControl('', [Validators.required]),
      })),
    });
  }

  public onSubmit(): void {
    const formValue = this.myForm.value;
    const submitedBonus = {
      company: this.vendorName.value.vendorId,
      phone: formValue.phone,
      dateStart: formValue.bonusDateRange.start,
      dateEnd: formValue.bonusDateRange.end,
      description: formValue.bonusDescription,
      type: formValue.bonusType,
      title: formValue.bonusTitle,
      locations: this.locations,
      tags: this.bonusTags.map((tag) => tag.name),
    };
    console.log(submitedBonus);
    // TODO: add service for post submitedBonus...
    // TODO: add service to get the current vendor from the base
    // TODO: add post new vendor if it does not existed, and change input vendor name when api will be ready
    this.goBack();
  }

  public onAddTag(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value.trim();
    if (value || '') {
      this.bonusTags.push({ name: value });
    }
    if (input) {
      input.value = '';
    }
  }
  public onRemoveTag(tag: ITag): void {
    const index = this.bonusTags.indexOf(tag);
    if (index >= 0) {
      this.bonusTags.splice(index, 1);
    }
  }
  public onAddAddressValue(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;
    if ((value || '').trim()) {
      this.onAddAddress(this.myForm);
    }
    if (input) {
      input.value = '';
    }
  }
  public onRemoveAddress(location: ILocation): void {
    const index = this.locations.indexOf(location);
    if (index >= 0) {
      this.locations.splice(index, 1);
    }
  }
}
