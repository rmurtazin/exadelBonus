import { TranslateModule } from '@ngx-translate/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BonusPopupComponent } from './bonus-popup.component';

describe('BonusPopupComponent', () => {
  let component: BonusPopupComponent;
  let fixture: ComponentFixture<BonusPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BonusPopupComponent],
      imports: [TranslateModule.forRoot()],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BonusPopupComponent);
    component = fixture.componentInstance;
    component.bonus = {
      title: 'title',
      id: 123,
      dateStart: 'dateStart',
      dateEnd: 'dateEnd',
      description: 'description',
      phone: 'phone',
      type: 'type',
      rating: 123,
      isActive: 1,
      locations: [],
      tags: [],
      company: {
        name: 'name',
        email: 'email',
      },
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
