import { expectedBonus } from '../../../mocks/constants/bonuses';
import { TranslateModule } from '@ngx-translate/core';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RateComponent } from './rate.component';
import { MatSlider } from '@angular/material/slider';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('RateComponent', () => {
  let component: RateComponent;
  let fixture: ComponentFixture<RateComponent>;
  let sliderDebugElement: DebugElement;
  let sliderNativeElement: HTMLElement;
  let sliderInstance: MatSlider;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RateComponent],
      imports: [HttpClientModule, ToastrModule.forRoot(), TranslateModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(RateComponent);
    component = fixture.componentInstance;
    component.bonus = expectedBonus;
    component.isForm = true;
    fixture.detectChanges();

    sliderDebugElement = fixture.debugElement.query(By.css('mat-slider#ratingSlider.slider'));
    sliderNativeElement = sliderDebugElement.nativeElement;
    sliderInstance = sliderDebugElement.componentInstance;

    component.backToBonusEvent.subscribe(() => {
      component.isForm = false;
    });
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set init slider start position', () => {
    expect(component.startPosition).toEqual(component.bonus.rating * 10);
  });

  it('should run handler when slider moving', () => {
    const spy = spyOn(component, 'onMatSliderChange');
    sliderNativeElement.dispatchEvent(new MouseEvent('input'));
    fixture.detectChanges();
    expect(spy).toHaveBeenCalled();
  });

  it('should reset rating and back to bonus', () => {
    component.bonus.rating = 20;
    component.isForm = true;
    component.backToBonus();
    expect(component.bonus.rating).toEqual(component.getUnchangedRating());
    expect(component.isForm).toBeFalse();
  });
});
