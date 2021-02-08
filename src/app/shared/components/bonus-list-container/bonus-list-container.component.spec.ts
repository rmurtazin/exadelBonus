import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BonusListContainerComponent } from './bonus-list-container.component';

describe('BonusListContainerComponent', () => {
  let component: BonusListContainerComponent;
  let fixture: ComponentFixture<BonusListContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BonusListContainerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BonusListContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
