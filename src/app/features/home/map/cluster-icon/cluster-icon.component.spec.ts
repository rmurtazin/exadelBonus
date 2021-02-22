import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClusterIconComponent } from './cluster-icon.component';

describe('ClusterIconComponent', () => {
  let component: ClusterIconComponent;
  let fixture: ComponentFixture<ClusterIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClusterIconComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClusterIconComponent);
    component = fixture.componentInstance;
    component.childCount = 2;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display number of input markers', () => {
    expect(fixture.nativeElement.querySelector('div').textContent).toEqual('2');
  });

  it('should display number of input markers', () => {
    component.childCount = null;
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('div').textContent).toEqual('');
  });
});
