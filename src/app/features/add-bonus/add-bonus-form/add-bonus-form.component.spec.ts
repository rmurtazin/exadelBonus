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
  const vendorNameFromDB = { vendorId: '17364634765845924816786387641', vendorName: 'MC', vendorEmail: 'mc@gmail.com' };
  const newVendorName = 'HotelB';

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddBonusFormComponent],
      imports: [RouterTestingModule, TranslateModule.forRoot(), MatAutocompleteModule, HttpClientModule, ToastrModule.forRoot(),]
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

  it('onVendorNameChange if vendorName has id property', () => {
    component.bonusFormConfig = {
      closeForm: () => EMPTY,
      addAddress: () => EMPTY,
      vendorNameChange: () => EMPTY,
      createNewVendor: () => EMPTY,
      createBonus: () => EMPTY,
    };
    const spy = spyOn(component.bonusFormConfig, 'vendorNameChange').and.callFake(()=>EMPTY);
    component.onVendorNameChange(vendorNameFromDB);
    expect(spy).toHaveBeenCalled();
    expect(component.readonly).toBeTruthy();
    expect(component.vendorEmailVisible).toBeTruthy();
    expect(component.visibleBtnForSaveNewVendor).toBeFalsy();
    expect(component.vendorInfo.value.vendorEmail).toBe(vendorNameFromDB.vendorEmail);
  });

  it('onVendorNameChange if vendorName has type of string', () => {
    component.bonusFormConfig = {
      closeForm: () => EMPTY,
      addAddress: () => EMPTY,
      vendorNameChange: () => EMPTY,
      createNewVendor: () => EMPTY,
      createBonus: () => EMPTY,
    };
    const spy = spyOn(component.bonusFormConfig, 'vendorNameChange').and.callFake(()=>EMPTY);
    component.onVendorNameChange(newVendorName);
    expect(spy).toHaveBeenCalled();
    expect(component.vendorEmailVisible).toBeFalsy();
    expect(component.visibleBtnForSaveNewVendor).toBeFalsy();
  });

  it('onOpenEmailInput', () => {
    component.onOpenEmailInput();
    expect(component.vendorInfo.value.vendorEmail).toEqual(null);
    expect(component.vendorInfo.value.vendorName).toEqual(null);
    expect(component.vendorEmailVisible).toBeTruthy();
    expect(component.visibleBtnForSaveNewVendor).toBeTruthy();
    expect(component.readonly).toBeFalsy();
  });

});
