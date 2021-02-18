import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BonusSearcherComponent } from './bonus-searcher.component';

describe('BonusSearcherComponent', () => {
  let component: BonusSearcherComponent;
  let fixture: ComponentFixture<BonusSearcherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BonusSearcherComponent],
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
});
