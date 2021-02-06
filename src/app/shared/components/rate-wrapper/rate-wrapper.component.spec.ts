import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RateWrapperComponent } from './rate-wrapper.component';

describe('RateWrapperComponent', () => {
  let component: RateWrapperComponent;
  let fixture: ComponentFixture<RateWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RateWrapperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RateWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
