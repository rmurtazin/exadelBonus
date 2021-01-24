import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LeafletMapContainerComponent } from './leaflet-map-container.component';

describe('LeafletMapComponent', () => {
  let component: LeafletMapContainerComponent;
  let fixture: ComponentFixture<LeafletMapContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeafletMapContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeafletMapContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
