import { TranslateModule } from '@ngx-translate/core';
import { RouterTestingModule } from '@angular/router/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddBonusFormComponent } from './add-bonus-form.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { AddBonusButtonComponent } from '../add-bonus-button/add-bonus-button.component';
import { AddBonusComponent } from '../add-bonus.component';
import { BonusAddressService } from '@services/bonus-address.service';
import { BonusesService } from '@services/bonuses.service';
import { VendorsService } from '@services/vendors.service';

describe('AddBonusFormComponent', () => {
  let component: AddBonusFormComponent;
  let fixture: ComponentFixture<AddBonusFormComponent>;
  const vendorNameChangeAlreadyExists = { vendorId: '17364634765845924816786387641', vendorName: 'MC', vendorEmail: 'mc@gmail.com' };
  const vendorNameChangeNew = 'HotelB';

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddBonusFormComponent, AddBonusComponent],
      imports: [RouterTestingModule, TranslateModule.forRoot(), MatAutocompleteModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBonusFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create form with 10 controls', () => {
    expect(component.myForm.contains('bonusAddress')).toBeTruthy();
    expect(component.myForm.contains('bonusType')).toBeTruthy();
    expect(component.myForm.contains('bonusDescription')).toBeTruthy();
    expect(component.myForm.contains('bonusTags')).toBeTruthy();
    expect(component.myForm.contains('bonusTitle')).toBeTruthy();
    expect(component.myForm.contains('phone')).toBeTruthy();
    expect(component.myForm.contains('start')).toBeTruthy();
    expect(component.myForm.contains('end')).toBeTruthy();
    expect(component.vendorInfo.contains('vendorName')).toBeTruthy();
    expect(component.vendorInfo.contains('vendorEmail')).toBeTruthy();
  });

  it('onVendorNameChange', () => {
    component.onVendorNameChange(vendorNameChangeAlreadyExists);
    expect(component.readonly).toBeTruthy();
    expect(component.vendorEmailVisible).toBeTruthy();
    expect(component.visibleBtnForSaveNewVendor).toBeFalsy();
    expect(component.vendorInfo.value.vendorEmail).toBe(vendorNameChangeAlreadyExists.vendorEmail);

  });

});
