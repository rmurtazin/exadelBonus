import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { BonusSearcherComponent } from './bonus-searcher.component';
import { TranslateModule } from '@ngx-translate/core';
import { EMPTY } from 'rxjs';

describe('BonusSearcherComponent', () => {
  let component: BonusSearcherComponent;
  let fixture: ComponentFixture<BonusSearcherComponent>;
  const vendor = { id: '17364634765845924816786387641', name: 'MC', email: 'mc@gmail.com' };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BonusSearcherComponent],
      imports: [MatAutocompleteModule, TranslateModule.forRoot()],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BonusSearcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('onVendorNameChange, should raise the id of vendor name if vendor exist id', () => {
    component.bonusFormConfig = {
      closeForm: () => EMPTY,
      addAddress: () => EMPTY,
      vendorNameChange: () => EMPTY,
      createNewVendor: () => EMPTY,
      createBonus: () => EMPTY,
      removeVendors: () => EMPTY,
    };
    spyOn(component.bonusFormConfig, 'vendorNameChange').and.callFake(() => vendor);
    component.getBonusesByVendorId.subscribe((spy) => expect(spy).toEqual(vendor.id));
    component.onVendorNameChange(vendor);
  });
});
