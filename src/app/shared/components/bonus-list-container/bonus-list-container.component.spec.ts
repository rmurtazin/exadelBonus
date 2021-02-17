import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BonusListContainerComponent } from './bonus-list-container.component';
import { TranslateModule } from '@ngx-translate/core';

describe('BonusListContainerComponent', () => {
  let component: BonusListContainerComponent;
  let fixture: ComponentFixture<BonusListContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule, ToastrModule.forRoot(), TranslateModule.forRoot()],
      declarations: [BonusListContainerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BonusListContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
