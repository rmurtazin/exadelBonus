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
  public newBonus = true;

  constructor(private bonusesService: BonusesService) {}

  public ngOnInit(): void {
    this.onInitForm();
    this.onFilteredVendors();
    if (this.bonusId ?? false) {
      this.newBonus = false;
      this.getBonus();
    }
  }

  public onFilteredVendors(): void {
    this.filteredVendors = this.vendorName.valueChanges.pipe(
      startWith(''),
      map((value) => (typeof value === 'string' ? value : '')),
      map((name) => (name ? this._filter(name) : this.vendors?.slice())),
    );
  }

  public getBonus(): void {
    this.bonusesService.getBonus(this.bonusId).subscribe((data: IBonus) => {
      if (data) {
        this.bonus = data;
        this.fillPage(data);
      }
    });
  }

  public fillPage(bonus: IBonus): void {
    // TODO: fill all values
    this.myForm.patchValue({
      vendorInfo: {
        vendorName: bonus.company.name,
        vendorEmail: bonus.company.email,
      },
      bonusType: bonus.type,
      bonusDescription: bonus.description,
      bonusTags: bonus.tags,
      bonusTitle: bonus.title,
      phone: bonus.phone,
      start: bonus.dateStart,
      end: bonus.dateEnd,
    });
  }

  public onVendorNameChange(vendorName: any): void {
    this.bonusFormConfig.vendorNameChange(vendorName);
    if (vendorName?.id) {
      this.readonly = true;
      this.vendorEmailVisible = true;
      this.visibleBtnForSaveNewVendor = false;
      this.vendorInfo.get('email').setValue(vendorName.email);
      this.bonusFormConfig.removeVendors();
    }
    if (vendorName === '') {
      this.vendorEmailVisible = false;
      this.visibleBtnForSaveNewVendor = false;
    }
  }

  public onOpenEmailInput(): void {
    this.vendorInfo.get('email').reset();
    this.vendorInfo.get('name').reset();
    this.vendorEmailVisible = true;
    this.visibleBtnForSaveNewVendor = true;
    this.readonly = false;
  }

  public onSaveNewVendor(): void {
    this.bonusFormConfig.createNewVendor(this.vendorInfo.value);
    this.bonusFormConfig.removeVendors();
    this.visibleBtnForSaveNewVendor = false;
    this.readonly = true;
  }

  public displayVendors(vendor: IVendor): string {
    return vendor?.name || '';
  }

  private _filter(vendor: string): IVendor[] {
    const filterValue = vendor.toLowerCase();
    return this.vendors.filter((item) => item.name.toLowerCase().indexOf(filterValue) === 0);
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
        name: (this.vendorName = new FormControl('', [Validators.required])),
        email: (this.vendorEmail = new FormControl('', [Validators.required, Validators.email])),
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

  public onSubmit(): void {
    const formValue = this.myForm.value;
    const submitBonus: INewBonus = {
      companyId: this.vendorName.value.id || this.newVendor.id,
      phone: formValue.phone,
      dateStart: new Date(formValue.start).toISOString(),
      dateEnd: new Date(formValue.end).toISOString(),
      description: formValue.bonusDescription,
      type: formValue.bonusType,
      title: formValue.bonusTitle,
      locations: this.locations,
      tags: this.bonusTags.map((tag) => tag.name),
    };
    this.bonusFormConfig.createBonus(submitBonus);
    this.goBack();
  }
}
