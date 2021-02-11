import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoosePlaceDialogComponent } from './choose-place-dialog.component';

describe('ChoosePlaceDialogComponent', () => {
  let component: ChoosePlaceDialogComponent;
  let fixture: ComponentFixture<ChoosePlaceDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChoosePlaceDialogComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoosePlaceDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
