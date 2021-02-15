import { TranslateModule } from '@ngx-translate/core';
import { RouterTestingModule } from '@angular/router/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddBonusFormComponent } from './add-bonus-form.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

describe('AddBonusFormComponent', () => {
  let component: AddBonusFormComponent;
  let fixture: ComponentFixture<AddBonusFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddBonusFormComponent],
      imports: [RouterTestingModule, TranslateModule.forRoot(), MatAutocompleteModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBonusFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  
});
