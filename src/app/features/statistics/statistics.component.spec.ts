import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatisticsComponent } from './statistics.component';
import { MatAutocomplete, MatAutocompleteModule } from '@angular/material/autocomplete';

describe('StatisticsComponent', () => {
  let component: StatisticsComponent;
  let fixture: ComponentFixture<StatisticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StatisticsComponent],
      imports: [
        TranslateModule.forRoot(),
        HttpClientModule,
        ToastrModule.forRoot(),
        MatAutocompleteModule,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
