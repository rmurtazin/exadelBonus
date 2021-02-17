import { TestBed } from '@angular/core/testing';
import { IBonus } from '@interfaces/bonus.interface';
import { IOffice } from '@interfaces/office.interface';
import { MapEventsService } from '@services/map-events.service';
import { latLng } from 'leaflet';
import { LatLng } from 'leaflet';

describe('MapEventService', () => {
  let mapEventservice: MapEventsService;
  let mockBonus: IBonus;
  let mockOffice: IOffice;
  beforeEach(() => {
    mapEventservice = new MapEventsService();
    TestBed.configureTestingModule({
      providers: [MapEventsService]
    });
    mapEventservice = TestBed.inject(MapEventsService);
  });

  it('#zoomToOfficeObserver should return value from observable', (done: DoneFn) => {
    mapEventservice.zoomToOfficeObserver().subscribe((value) => {
      expect(value).toBe(mockOffice);
      done();
    });
    mapEventservice.zoomToOffice(mockOffice);
  });

  it('#collBonusInfoObserver should return value from observable', (done: DoneFn) => {
    mapEventservice.collBonusInfoObserver().subscribe((value) => {
      expect(value).toBe(mockBonus);
      done();
    });
    mapEventservice.collBonusInfo(mockBonus);
  });

  it('#changeMapViewObserver should return value from observable', (done: DoneFn) => {
    const location = latLng(0, 0);
    const showUserMarker = true;
    mapEventservice.changeMapViewObserver().subscribe((value) => {
      expect(value).toEqual({ location, showUserMarker });
      done();
    });
    mapEventservice.setMapView(location, showUserMarker);
  });
});
