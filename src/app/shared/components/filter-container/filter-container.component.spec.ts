import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ToastrModule } from 'ngx-toastr';

import { FilterContainerComponent } from './filter-container.component';

describe('FilterContainerComponent', () => {
  let component: FilterContainerComponent;
  let fixture: ComponentFixture<FilterContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FilterContainerComponent],
      imports: [HttpClientModule, ToastrModule.forRoot()],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
