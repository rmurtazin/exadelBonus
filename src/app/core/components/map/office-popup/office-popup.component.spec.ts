import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficePopupComponent } from './office-popup.component';

describe('OfficePopupComponent', () => {
  let component: OfficePopupComponent;
  let fixture: ComponentFixture<OfficePopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OfficePopupComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OfficePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
