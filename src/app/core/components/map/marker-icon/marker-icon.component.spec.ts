import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkerIconComponent } from './marker-icon.component';

describe('MarkerIconComponent', () => {
  let component: MarkerIconComponent;
  let fixture: ComponentFixture<MarkerIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MarkerIconComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarkerIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
