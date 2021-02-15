import { TranslateModule } from '@ngx-translate/core';
import { RouterTestingModule } from '@angular/router/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddBonusFormComponent } from './add-bonus-form.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

describe('AddBonusFormComponent', () => {
  let component: AddBonusFormComponent;
  let fixture: ComponentFixture<AddBonusFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddBonusFormComponent],
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
});
