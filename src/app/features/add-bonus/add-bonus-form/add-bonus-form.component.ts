import { ENTER, COMMA } from '@angular/cdk/keycodes';
import { Input } from '@angular/core';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';
import { Router } from '@angular/router';
import { MarkersIcons } from '@enums/markers-icons.enum';
import { ILocation, INewBonus, ITag, IVendor } from '@interfaces/add-bonus.interface';
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
  @Output() createBonus = new EventEmitter<any>();
  @Input() locations: ILocation[];
  @Input() vendors: IVendor[];
  @Input() newVendor: IVendor;
  public myForm: FormGroup;
  public vendorInfo: FormGroup;
  public vendorName: FormControl;
  public vendorEmail: FormControl;
  public bonusType: FormControl;
  public range: FormGroup;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  public bonusTags: ITag[] = [];
  public filteredVendors: Observable<IVendor[]>;
  public types: string[] = Object.keys(MarkersIcons);
  public vendorEmailVisible = false;
  public visibleBtnForSaveNewVendor = false;
  public readonlyForVendorEmail = true;
  public readonlyForVendorName = false;
  public visible = true;
  public selectable = true;
  public removable = true;
  public addOnBlur = true;

  constructor(private router: Router) {}

  public ngOnInit(): void {
    this.types = Object.values(this.types);
    this.onInitForm();
    this.filteredVendors = this.vendorName.valueChanges.pipe(
      startWith(''),
      map((value) => (typeof value === 'string' ? value : '')),
      map((name) => (name ? this._filter(name) : this.vendors.slice())),
    );
  }
  public onVendorNameChange(vendorName: any): void {
    this.vendorNameChange.emit(vendorName);
    if (vendorName && vendorName.vendorId) {
      this.readonlyForVendorEmail = true;
      this.readonlyForVendorName = true;
      this.vendorEmailVisible = true;
      this.visibleBtnForSaveNewVendor = false;
      return this.vendorInfo.get('vendorEmail').setValue(vendorName.vendorEmail);
    }
    if (this.vendorName.value === '') {
      this.vendorEmailVisible = false;
      this.visibleBtnForSaveNewVendor = false;
    }
    this.vendorInfo.get('vendorEmail').reset();
  }
  public onOpenEmailInput(): void {
    this.vendorInfo.get('vendorEmail').reset();
    this.vendorInfo.get('vendorName').reset();
    this.vendorEmailVisible = true;
    this.visibleBtnForSaveNewVendor = true;
    this.readonlyForVendorEmail = false;
    this.readonlyForVendorName = false;
  }
  public onSaveNewVendor(newVendor: any): void {
    this.createNewVendor.emit(this.vendorInfo.value);
    this.visibleBtnForSaveNewVendor = false;
    this.readonlyForVendorEmail = true;
  }
  public displayFn(vendor: IVendor): string {
    return vendor && vendor.vendorName ? vendor.vendorName : '';
  }
  private _filter(vendor: string): IVendor[] {
    const filterValue = vendor.toLowerCase();
    return this.vendors.filter((item) => item.vendorName.toLowerCase().indexOf(filterValue) === 0);
  }
  public onAddAddress(myForm: any): void {
    this.addAddress.emit(myForm);
  }
  public goBack(): void {
    this.closeForm.emit(false);
  }
  public onInitForm(): void {
    this.myForm = new FormGroup({
      vendorInfo: (this.vendorInfo = new FormGroup({
        vendorName: (this.vendorName = new FormControl('', [Validators.required])),
        vendorEmail: (this.vendorEmail = new FormControl('', [Validators.required])),
      })),
      bonusAddress: new FormControl('', [Validators.required]),
      bonusType: (this.bonusType = new FormControl('', [Validators.required])),
      bonusDescription: new FormControl('', [Validators.required]),
      bonusTags: new FormControl('', [Validators.required]),
      bonusTitle: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required]),
      bonusDateRange: (this.range = new FormGroup({
        start: new FormControl('', [Validators.required]),
        end: new FormControl('', [Validators.required]),
      })),
    });
  }
  public onSubmit(newBonus: INewBonus): void {
    const formValue = this.myForm.value;
    const submitedBonus = {
      company: this.vendorName.value.vendorId || this.newVendor.vendorId,
      phone: formValue.phone,
      dateStart: formValue.bonusDateRange.start,
      dateEnd: formValue.bonusDateRange.end,
      description: formValue.bonusDescription,
      type: formValue.bonusType,
      title: formValue.bonusTitle,
      locations: this.locations,
      tags: this.bonusTags.map((tag) => tag.name),
    };
    this.createBonus.emit(submitedBonus);
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
