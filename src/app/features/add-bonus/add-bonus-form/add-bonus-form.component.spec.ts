import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';
import { RouterTestingModule } from '@angular/router/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddBonusFormComponent } from './add-bonus-form.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { EMPTY } from 'rxjs';

describe('AddBonusFormComponent', () => {
  let component: AddBonusFormComponent;
  let fixture: ComponentFixture<AddBonusFormComponent>;
  const vendorNameFromDB = {
    id: '17364634765845924816786387641',
    name: 'MC',
    email: 'mc@gmail.com',
  };
  const newVendorName = 'HotelB';
  const vendorNameNotExist = {
    id: '17364634765845924816786387641',
    name: '',
    email: 'mc@gmail.com',
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddBonusFormComponent],
      imports: [
        RouterTestingModule,
        TranslateModule.forRoot(),
        MatAutocompleteModule,
        HttpClientModule,
        ToastrModule.forRoot(),
      ],
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
    expect(component.vendorInfo.contains('name')).toBeTruthy();
    expect(component.vendorInfo.contains('email')).toBeTruthy();
  });

  it('onVendorNameChange if vendorName has id property', () => {
    component.bonusFormConfig = {
      closeForm: () => EMPTY,
      addAddress: () => EMPTY,
      vendorNameChange: () => EMPTY,
      createNewVendor: () => EMPTY,
      createBonus: () => EMPTY,
      removeVendors: () => EMPTY,
    };
    const spy = spyOn(component.bonusFormConfig, 'vendorNameChange').and.callFake(() => EMPTY);
    component.onVendorNameChange(vendorNameFromDB);
    expect(spy).toHaveBeenCalled();
    expect(component.readonly).toBeTruthy();
    expect(component.vendorEmailVisible).toBeTruthy();
    expect(component.visibleBtnForSaveNewVendor).toBeFalsy();
    expect(component.vendorInfo.value.email).toBe(vendorNameFromDB.email);
  });

  it('onVendorNameChange if vendorName has type of string', () => {
    component.bonusFormConfig = {
      closeForm: () => EMPTY,
      addAddress: () => EMPTY,
      vendorNameChange: () => EMPTY,
      createNewVendor: () => EMPTY,
      createBonus: () => EMPTY,
      removeVendors: () => EMPTY,
    };
    const spy = spyOn(component.bonusFormConfig, 'vendorNameChange').and.callFake(() => EMPTY);
    component.onVendorNameChange(newVendorName);
    expect(spy).toHaveBeenCalled();
    expect(component.vendorEmailVisible).toBeFalsy();
    expect(component.visibleBtnForSaveNewVendor).toBeFalsy();
  });

  it('onOpenEmailInput', () => {
    component.onOpenEmailInput();
    expect(component.vendorInfo.value.email).toEqual(null);
    expect(component.vendorInfo.value.name).toEqual(null);
    expect(component.vendorEmailVisible).toBeTruthy();
    expect(component.visibleBtnForSaveNewVendor).toBeTruthy();
    expect(component.readonly).toBeFalsy();
  });

  it('displayVendors, if vendor name exist', () => {
    expect(component.displayVendors(vendorNameFromDB)).toBe(vendorNameFromDB.name);
  });

  it('displayVendors, if vendor name does not exist', () => {
    expect(component.displayVendors(vendorNameNotExist)).toBe('');
  });
});
