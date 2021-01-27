import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BonusPopupComponent } from './bonus-popup.component';

describe('BonusPopupComponent', () => {
  let component: BonusPopupComponent;
  let fixture: ComponentFixture<BonusPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BonusPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BonusPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
