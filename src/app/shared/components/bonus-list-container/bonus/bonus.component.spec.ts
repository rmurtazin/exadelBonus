import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { expectedBonus } from 'src/app/shared/mocks/constants/bonuses';

import { BonusComponent } from './bonus.component';

describe('BonusComponent', () => {
  let component: BonusComponent;
  let fixture: ComponentFixture<BonusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BonusComponent],
      imports: [HttpClientModule, RouterModule.forRoot([])],
    }).compileComponents();

    fixture = TestBed.createComponent(BonusComponent);
    component = fixture.componentInstance;
    component.bonus = expectedBonus;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
