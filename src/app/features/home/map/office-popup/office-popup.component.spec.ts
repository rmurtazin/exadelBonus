import { TranslateModule } from '@ngx-translate/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficePopupComponent } from './office-popup.component';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';

describe('OfficePopupComponent', () => {
  let component: OfficePopupComponent;
  let fixture: ComponentFixture<OfficePopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OfficePopupComponent],
      imports: [TranslateModule.forRoot(), HttpClientModule, ToastrModule.forRoot()],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OfficePopupComponent);
    component = fixture.componentInstance;
    component.office = {
      id: '123',
      country: 'country',
      city: 'city',
      address: 'address',
      latitude: 123,
      longitude: 321,
      phone: '234',
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('shuld display office city', () => {
    expect(fixture.nativeElement.querySelector('h1').textContent).toEqual('city');
  });
});
