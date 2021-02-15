import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';
import { AddBonusModule } from '../add-bonus.module';
import { AddBonusButtonComponent } from './add-bonus-button.component';

describe('AddBonusButtonComponent', () => {
  let component: AddBonusButtonComponent;
  let fixture: ComponentFixture<AddBonusButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddBonusButtonComponent],
      imports: [HttpClientModule, AddBonusModule, TranslateModule.forRoot()],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBonusButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should raises the event when clicked', () => {
    component.openForm.subscribe((event) => expect(event).toBe(true));
    component.onOpenForm();
  });
});
