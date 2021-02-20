import { TranslateModule } from '@ngx-translate/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BonusPopupComponent } from './bonus-popup.component';
import { bounds } from 'leaflet';
import { IBonus } from '@interfaces/bonus.interface';

describe('BonusPopupComponent', () => {
  let component: BonusPopupComponent;
  let fixture: ComponentFixture<BonusPopupComponent>;
  let mockBonus: IBonus;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BonusPopupComponent],
      imports: [TranslateModule.forRoot()],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BonusPopupComponent);
    component = fixture.componentInstance;
    mockBonus = {
      title: 'title',
      id: '123',
      dateStart: 'dateStart',
      dateEnd: 'dateEnd',
      description: 'description',
      phone: 'phone',
      type: 'type',
      rating: 123,
      isActive: true,
      locations: [],
      tags: [],
      company: {
        id: '',
        name: 'name',
        email: 'email',
      },
    };
    component.bonus = mockBonus;
    fixture = TestBed.createComponent(BonusPopupComponent);
    component = fixture.componentInstance;
    component.bonus = mockBonus;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display bonus company name', () => {
    expect(fixture.nativeElement.querySelector('h3').textContent).toEqual(mockBonus.company.name);
  });

  it('should display bonus type', () => {
    expect(fixture.nativeElement.querySelector('h1').textContent).toEqual(mockBonus.type);
  });
});
