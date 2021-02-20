import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { ToastrModule } from 'ngx-toastr';
import { AddBonusComponent } from '../add-bonus/add-bonus.component';
import { LoginComponent } from './login.component';
import { LoginModule } from './login.module';

describe('LoginComponent', () => {
  let component: AddBonusComponent;
  let fixture: ComponentFixture<AddBonusComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [
        LoginModule,
        ToastrModule.forRoot(),
        TranslateModule.forRoot(),
        RouterModule.forRoot([]),
        BrowserAnimationsModule,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBonusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeEach(() => {});

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
