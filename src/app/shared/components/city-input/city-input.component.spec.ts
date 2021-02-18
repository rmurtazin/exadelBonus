import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CityInputComponent } from './city-input.component';
import { CityService } from '@services/city.service';
import { HttpClientModule } from '@angular/common/http';

describe('CityInputComponent', () => {
  let component: CityInputComponent;
  let fixture: ComponentFixture<CityInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CityInputComponent],
      imports: [MatAutocompleteModule, HttpClientModule],
      providers: [CityService],
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
