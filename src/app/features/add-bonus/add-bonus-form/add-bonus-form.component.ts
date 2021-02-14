import { IBonus } from '@interfaces/bonus.interface';
import { BonusesService } from '@services/bonuses.service';
import { ENTER, COMMA } from '@angular/cdk/keycodes';
import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';
import { MarkersIcons } from '@enums/markers-icons.enum';
import {
  IBonusFormConfig,
  ILocation,
  INewBonus,
  ITag,
  IVendor,
} from '@interfaces/add-bonus.interface';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-add-bonus-form',
  templateUrl: './add-bonus-form.component.html',
  styleUrls: ['./add-bonus-form.component.scss'],
})
export class AddBonusFormComponent implements OnInit {
  @Input() bonusFormConfig: IBonusFormConfig;
  @Input() locations: ILocation[];
  @Input() vendors: IVendor[];
  @Input() newVendor: IVendor;
  @Input() bonusId: string;

  public myForm: FormGroup;
  public vendorInfo: FormGroup;
  public vendorName: FormControl;
  public vendorEmail: FormControl;
  public bonusTags: ITag[] = [];
  public types: string[] = Object.keys(MarkersIcons);
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  public filteredVendors: Observable<IVendor[]>;
  public vendorEmailVisible = false;
  public visibleBtnForSaveNewVendor = false;
  public readonly = true;
  public removable = true;
  public addOnBlur = true;
  public bonus: IBonus;

  constructor(private bonusesService: BonusesService) {}

  public ngOnInit(): void {
    if (this.bonusId ?? false) {
      this.getBonus();
    } else {
      this.onInitForm();
      this.filteredVendors = this.vendorName.valueChanges.pipe(
        startWith(''),
        map((value) => (typeof value === 'string' ? value : '')),
        map((name) => (name ? this._filter(name) : this.vendors.slice())),
      );
    }
  }

  public getBonus(): void {
    this.bonusesService.getBonus(this.bonusId).subscribe(
      (data: IBonus) => {
        if (data) {
          this.bonus = data;
        }
      }
    )
    this.onInitForm();
  }

  public onVendorNameChange(vendorName: any): void {
    this.bonusFormConfig.vendorNameChange(vendorName);
    if (vendorName?.vendorId) {
      this.readonly = true;
      this.vendorEmailVisible = true;
      this.visibleBtnForSaveNewVendor = false;
      this.vendorInfo.get('vendorEmail').setValue(vendorName.vendorEmail);
    }
    if (vendorName === '') {
      this.vendorEmailVisible = false;
      this.visibleBtnForSaveNewVendor = false;
    }
  }

  public onOpenEmailInput(): void {
    this.vendorInfo.get('vendorEmail').reset();
    this.vendorInfo.get('vendorName').reset();
    this.vendorEmailVisible = true;
    this.visibleBtnForSaveNewVendor = true;
    this.readonly = false;
  }

  public onSaveNewVendor(): void {
    this.bonusFormConfig.createNewVendor(this.vendorInfo.value);
    this.visibleBtnForSaveNewVendor = false;
    this.readonly = true;
  }

  public displayFn(vendor: IVendor): string {
    return vendor?.vendorName ? vendor.vendorName : '';
  }

  private _filter(vendor: string): IVendor[] {
    const filterValue = vendor.toLowerCase();
    return this.vendors.filter((item) => item.vendorName.toLowerCase().indexOf(filterValue) === 0);
  }

  public onAddAddress(myForm: any): void {
    this.bonusFormConfig.addAddress(myForm);
  }

  public goBack(): void {
    this.bonusFormConfig.closeForm();
  }

  public onInitForm(): void {
    this.myForm = new FormGroup({
      vendorInfo: (this.vendorInfo = new FormGroup({
        vendorName: (this.vendorName = new FormControl('', [Validators.required])),
        vendorEmail: (this.vendorEmail = new FormControl('', [Validators.required])),
      })),
      bonusAddress: new FormControl('', [Validators.required]),
      bonusType: new FormControl('', [Validators.required]),
      bonusDescription: new FormControl('', [Validators.required]),
      bonusTags: new FormControl('', [Validators.required]),
      bonusTitle: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required]),
      start: new FormControl('', [Validators.required]),
      end: new FormControl('', [Validators.required]),
    });
  }

  public onSubmit(): void {
    const formValue = this.myForm.value;
    const submitBonus: INewBonus = {
      company: this.vendorName.value.vendorId || this.newVendor.vendorId,
      phone: formValue.phone,
      dateStart: formValue.start,
      dateEnd: formValue.end,
      description: formValue.bonusDescription,
      type: formValue.bonusType,
      title: formValue.bonusTitle,
      locations: this.locations,
      tags: this.bonusTags.map((tag) => tag.name),
    };
    this.bonusFormConfig.createBonus(submitBonus);
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
