import { Component, ElementRef, Renderer2 } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { By } from '@angular/platform-browser';
import { LanguageSwitcherDirective } from '../language-switcher.directive';

@Component({
  template: `<button class="language-switcher-button" appLanguageSwitcher>EN</button>`,
})
class TestLanguageSwitcherComponent {}

describe('LanguageSwitcherDirective', () => {
  let component: TestLanguageSwitcherComponent;
  let fixture: ComponentFixture<TestLanguageSwitcherComponent>;
  let directive: LanguageSwitcherDirective;

  beforeEach(async () => {
    directive = new LanguageSwitcherDirective(null, null, null);
    await TestBed.configureTestingModule({
      declarations: [LanguageSwitcherDirective, TestLanguageSwitcherComponent],
      imports: [TranslateModule.forRoot()],
    }).compileComponents();
    fixture = TestBed.createComponent(TestLanguageSwitcherComponent);
    component = fixture.componentInstance;
  });

  it('should create an instance', () => {
    expect(directive).toBeTruthy();
  });

  it('should change text of button', () => {
    const buttonEl = fixture.debugElement.query(By.css('.language-switcher-button'));
    buttonEl.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(
      fixture.debugElement.nativeElement.querySelector('.language-switcher-button').textContent,
    ).toEqual('RU');
  });
});
