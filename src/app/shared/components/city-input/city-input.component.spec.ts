import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CityInputComponent } from './city-input.component';
import { HttpClientModule } from '@angular/common/http';
import { BonusesService } from '@services/bonuses.service';
import { TranslateModule } from '@ngx-translate/core';
import { ToastrModule } from 'ngx-toastr';
import { LocationService } from '@services/location.service';
import { MatDialogModule } from '@angular/material/dialog';
import { RouterModule } from '@angular/router';

describe('CityInputComponent', () => {
  let component: CityInputComponent;
  let fixture: ComponentFixture<CityInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CityInputComponent],
      imports: [
        MatAutocompleteModule,
        HttpClientModule,
        ToastrModule.forRoot(),
        TranslateModule.forRoot(),
        MatDialogModule,
        RouterModule.forRoot([]),
      ],
      providers: [BonusesService, LocationService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CityInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
