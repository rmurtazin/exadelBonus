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
        mockBonus = {
            id: 123,
            company: {
                email: 'MockEmail',
                name: 'MockName'
            },
            dateStart: 'mockDateStart',
            dateEnd: 'mockDateEnd',
            tags: ['mock'],
            isActive: 1,
            description: 'mock mock mock',
            locations: [{
                city: 'MockCity',
                country: 'MockCountry',
                address: 'mock addres',
                latitude: 0.12,
                longitude: 0.12
            }],
            type: 'mockType',
            rating: 2,
            phone: '342743623674'
        };

        mockOffice = {
            id: '123',
            country: 'MockCountry',
            city: 'MockCity',
            address: 'mock addres',
            longitude: 0,
            latitude: 0,
            phone: '33333333'
        };
    });

    it('#zoomToOfficeObserver should return value from observable',
    (done: DoneFn) => {
        mapEventservice.zoomToOfficeObserver().subscribe((value) => {
            expect(value).toBe(mockOffice);
            done();
        });
        mapEventservice.zoomToOffice(mockOffice);
    });

    it('#collBonusInfoObserver should return value from observable',
    (done: DoneFn) => {
        mapEventservice.collBonusInfoObserver().subscribe((value) => {
            expect(value).toBe(mockBonus);
            done();
        });
        mapEventservice.collBonusInfo(mockBonus);
    });

    it('#changeMapViewObserver should return value from observable',
    (done: DoneFn) => {
        const location = latLng(0, 0);
        const showUserMarker = true;
        mapEventservice.changeMapViewObserver().subscribe((value) => {
            expect(value).toEqual({location, showUserMarker});
            done();
        });
        mapEventservice.setMapView(location, showUserMarker);
    });
});
