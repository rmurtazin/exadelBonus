import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BonusDetailComponent } from './bonus-detail.component';

describe('BonusDetailComponent', () => {
  let component: BonusDetailComponent;
  let fixture: ComponentFixture<BonusDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BonusDetailComponent],
      imports: [HttpClientModule, RouterTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BonusDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
