import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { BonusSearcherComponent } from './bonus-searcher.component';
import { TranslateModule } from '@ngx-translate/core';

describe('BonusSearcherComponent', () => {
  let component: BonusSearcherComponent;
  let fixture: ComponentFixture<BonusSearcherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BonusSearcherComponent],
      imports: [MatAutocompleteModule, TranslateModule.forRoot()],
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
