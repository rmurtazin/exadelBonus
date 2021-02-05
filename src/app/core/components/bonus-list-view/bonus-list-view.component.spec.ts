import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BonusListViewComponent } from './bonus-list-view.component';

describe('BonusListViewComponent', () => {
  let component: BonusListViewComponent;
  let fixture: ComponentFixture<BonusListViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BonusListViewComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BonusListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
