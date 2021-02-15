import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';

import { MapViewComponent } from './map-view.component';

describe('MapViewComponent', () => {
  let component: MapViewComponent;
  let fixture: ComponentFixture<MapViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeafletModule],
      declarations: [MapViewComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MapViewComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('map ready event hendler should be called', () => {
    const spy = spyOn(component, 'onMapReady');
    fixture.detectChanges();
    expect(spy).toHaveBeenCalled();
  });
});
