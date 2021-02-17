import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';
import { ToastrModule } from 'ngx-toastr';
import { AddBonusButtonComponent } from './add-bonus-button/add-bonus-button.component';
import { AddBonusFormComponent } from './add-bonus-form/add-bonus-form.component';
import { AddBonusComponent } from './add-bonus.component';
import { AddBonusModule } from './add-bonus.module';

describe('AddBonusComponent', () => {
  let component: AddBonusComponent;
  let fixture: ComponentFixture<AddBonusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddBonusComponent, AddBonusFormComponent, AddBonusButtonComponent],
      imports: [
        HttpClientModule,
        AddBonusModule,
        ToastrModule.forRoot(),
        TranslateModule.forRoot(),
        RouterModule.forRoot([]),
      ],
    }).compileComponents();
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
