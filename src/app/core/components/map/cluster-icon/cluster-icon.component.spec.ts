import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClusterIconComponent } from './cluster-icon.component';

describe('ClusterIconComponent', () => {
  let component: ClusterIconComponent;
  let fixture: ComponentFixture<ClusterIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClusterIconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClusterIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
