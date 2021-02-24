import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';
import { ToastrModule } from 'ngx-toastr';
import { EMPTY, of } from 'rxjs';
import { AddBonusButtonComponent } from './add-bonus-button/add-bonus-button.component';
import { AddBonusFormComponent } from './add-bonus-form/add-bonus-form.component';
import { AddBonusComponent } from './add-bonus.component';
import { AddBonusModule } from './add-bonus.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BonusSearcherComponent } from './bonus-searcher/bonus-searcher.component';
import { VendorsService } from '@services/vendors.service';

describe('AddBonusComponent', () => {
  let component: AddBonusComponent;
  let fixture: ComponentFixture<AddBonusComponent>;
  const bonusAddressService = 'bonusAddressService';
  const bonusesService = 'bonusesService';
  const vendorsService = 'vendorsService';

  const myForm = {
    value: {
      bonusAddress: 'Ukraine Vinnitsa Soborna 100',
    },
  };
  const dataAddress = [
    {
      geometry: { latitude: 27, longitude: 47 },
      components: { city: 'Vinnitsa', country: 'Ukraine', road: 'Soborna', house_number: '100' },
    },
  ];
  const bonus = {
    title: 'bonus title',
    description: 'bonus description',
    type: 'bonus type',
    phone: 'bonus phone',
    companyId: 'bonus company',
    dateStart: 'bonus dateStart',
    dateEnd: 'bonus dateEnd',
    locations: [
      {
        latitude: 27,
        longitude: 42,
        city: 'Vinnitsa',
        country: 'Ukraine',
        address: 'Soborna, 100',
      },
    ],
    tags: ['tags'],
  };
  const bonuses = [
    {
      id: '468378465974375',
      dateStart: '10.10.2020',
      dateEnd: '10.10.2021',
      description: 'description',
      phone: '+38(098)-333-33-33',
      type: 'hotel',
      rating: 0,
      isActive: true,
      locations: [
        {
          latitude: 27,
          longitude: 42,
          city: 'Vinnitsa',
          country: 'Ukraine',
          address: 'Soborna, 100',
        },
      ],
      tags: ['tags'],
      company: { id: '875678349729847', name: 'MC', email: 'mc@gmail.com' },
      title: 'sale',
    },
  ];

  const vendors = [{ id: '17364634765845924816786387641', name: 'MC', email: 'mc@gmail.com' }];

  const newVendor = { name: 'MC', email: 'mc@gmail.com' };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AddBonusComponent,
        AddBonusFormComponent,
        AddBonusButtonComponent,
        BonusSearcherComponent,
      ],
      imports: [
        HttpClientModule,
        AddBonusModule,
        ToastrModule.forRoot(),
        TranslateModule.forRoot(),
        RouterModule.forRoot([]),
        BrowserAnimationsModule,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBonusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call bonusAddressService', () => {
    const spy = spyOn(component[bonusAddressService], 'getSearchedAddress').and.callFake(
      () => EMPTY,
    );
    component.onAddAddress(myForm);
    expect(spy).toHaveBeenCalled();
  });

  it('should update locations length after get method', () => {
    spyOn(component[bonusAddressService], 'getSearchedAddress').and.callFake(() => of(dataAddress));
    component.onAddAddress(myForm);
    expect(component.locations.length).toBe(dataAddress.length);
  });

  it('should call method addBonus from bonusesService', () => {
    const spy = spyOn(component[bonusesService], 'addBonus').and.callFake(() => EMPTY);
    component.bonusFormConfig.createBonus(bonus);
    expect(spy).toHaveBeenCalled();
  });

  it('should call method getBonus from bonusesService', () => {
    const spy = spyOn(component[bonusesService], 'getBonuses').and.callFake(() => EMPTY);
    component.ngOnInit();
    expect(spy).toHaveBeenCalled();
  });

  it('should update bonuses length after get method', () => {
    spyOn(component[bonusesService], 'getBonuses').and.callFake(() => of(bonuses));
    component.ngOnInit();
    expect(component.bonuses.length).toBe(bonuses.length);
  });

  it('should call method getVendors from vendorsService', () => {
    const spy = spyOn(component[vendorsService], 'getVendors').and.callFake(() => EMPTY);
    component.getVendors('query');
    expect(spy).toHaveBeenCalled();
  });

  it('should update vendors length after get method', () => {
    spyOn(component[vendorsService], 'getVendors').and.callFake(() => of(vendors));
    component.getVendors('query');
    expect(component.vendors.length).toBe(vendors.length);
  });

  it('should call method createVendor from vendorsService', () => {
    const spy = spyOn(component[vendorsService], 'createVendor').and.callFake(() => EMPTY);
    component.createVendor(newVendor);
    expect(spy).toHaveBeenCalled();
  });

  it('should update newVendor after post method for create', () => {
    spyOn(component[vendorsService], 'createVendor').and.callFake(() => of(vendors[0]));
    component.createVendor(newVendor);
    expect(component.newVendor).toEqual(vendors[0]);
  });

  it('should change isFormActive to false after click', () => {
    component.bonusFormConfig.closeForm();
    expect(component.isFormActive).toBeFalsy();
  });

  it('should change isFormActive to true after click', () => {
    component.openForm();
    expect(component.isFormActive).toBeTruthy();
  });
});
