import { ENTER, COMMA } from '@angular/cdk/keycodes';
import { Input } from '@angular/core';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';
import { Router } from '@angular/router';
import { ILocation, ITag } from '@interfaces/add-bonus.interface';

@Component({
  selector: 'app-add-bonus-form',
  templateUrl: './add-bonus-form.component.html',
  styleUrls: ['./add-bonus-form.component.scss'],
})
export class AddBonusFormComponent implements OnInit {
  @Output() addAddress = new EventEmitter<any>();
  @Output() closeForm = new EventEmitter<boolean>();
  @Input() locations: ILocation[];
  public myForm: FormGroup;
  public vendorName: FormControl;
  public range: FormGroup;
  public visible = true;
  public selectable = true;
  public removable = true;
  public addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  public bonusTags: ITag[] = [];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.onInitForm();
  }

  public onAddAddress(myForm: any): void {
    this.addAddress.emit(myForm);
  }

  public goBack(): void {
    this.closeForm.emit(false);
  }

  public onInitForm(): void {
    this.myForm = new FormGroup({
      vendorName: new FormControl('', [Validators.required]),
      bonusAddress: new FormControl('', [Validators.required]),
      bonusType: new FormControl('', [Validators.required]),
      bonusDescription: new FormControl('', [Validators.required]),
      bonusTags: new FormControl('', [Validators.required]),
      bonusTitle: new FormControl('', [Validators.required]),
      vendorEmail: new FormControl('', [Validators.required, Validators.email]),
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
      company: {
        name: formValue.vendorName,
        phone: formValue.phone,
        email: formValue.vendorEmail,
      },
      dateStart: formValue.bonusDateRange.start,
      dateEnd: formValue.bonusDateRange.end,
      description: formValue.bonusDescription,
      type: formValue.bonusType,
      title: formValue.bonusValue,
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
