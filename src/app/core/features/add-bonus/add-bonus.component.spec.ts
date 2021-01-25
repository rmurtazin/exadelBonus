import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBonusComponent } from './add-bonus.component';

describe('AddBonusComponent', () => {
  let component: AddBonusComponent;
  let fixture: ComponentFixture<AddBonusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddBonusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBonusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
