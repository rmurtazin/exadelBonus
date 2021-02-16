import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';
import { SortContainerComponent } from './sort-container.component';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { FilterService } from '@services/filter.service';
import { MatRadioChange } from '@angular/material/radio';

const FilterServiceStub:  Partial<FilterService> = {
  addSortToQuery(typeOfSort){
    return typeOfSort;
  }
};

describe('SortContainerComponent', () => {
  let component: SortContainerComponent;
  let fixture: ComponentFixture<SortContainerComponent>;
  let filterService: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SortContainerComponent],
      imports: [HttpClientModule, TranslateModule.forRoot(),  ToastrModule.forRoot()],
      providers: [ { provide: FilterService, useValue: FilterServiceStub } ]
    }).compileComponents();
 
    fixture = TestBed.createComponent(SortContainerComponent);
    component = fixture.componentInstance;
    filterService = fixture.debugElement.injector.get(FilterService);
    fixture.detectChanges();
  });

  it('should create sort component', () => {
    expect(component).toBeTruthy();
  });

  it('should render radio-button', () => {
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('mat-radio-button').textContent).toContain('home.pick.sorting.byTitle');
  });

  it('should send type of sort to service ', fakeAsync(() => {
    let spy  = spyOn(component, 'sortBy');
    
    let radioButton = fixture.debugElement.nativeElement.querySelector("mat-radio-button");
    
    fixture.detectChanges();

    console.log(radioButton);
    
    radioButton.click();
    
    fixture.detectChanges();
    
     expect(spy).toHaveBeenCalled();
  }));

});
