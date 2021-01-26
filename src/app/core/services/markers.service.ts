import { ComponentFactoryResolver, Injectable, Injector } from '@angular/core';
import { Marker, Icon, PointExpression } from 'leaflet';
import { IOffice } from '@interfaces/office.interface';
import { IBonus } from '@interfaces/bonus.interface';
import { MarkerEventsService } from './marker-events.service';
import { OfficePopupComponent } from '@components/map/office-popup/office-popup.component';
import { PopupService } from './popup.service';

@Injectable()
export class MarkersService{
    private iconSize: PointExpression = [32, 32];
    private iconAnchor: PointExpression = [32, 32];
    private popupAnchor: PointExpression = [-15, -35];
    private bonusMarkerIco = new Icon({
        iconUrl: '/assets/icons/marker.png',
        iconSize: this.iconSize,
        iconAnchor: this.iconAnchor,
        popupAnchor: this.popupAnchor
    });

    private officeMarkerIco = new Icon({
        iconUrl: '/assets/icons/office.png',
        iconSize: this.iconSize,
        iconAnchor: this.iconAnchor,
        popupAnchor: this.popupAnchor
    });

    constructor(
        private popupService: PopupService,
        private injector: Injector,
        private resolver: ComponentFactoryResolver
        ){}

    public createOfficesMarkers(offices: IOffice[]): Marker[]{
        return offices.map((office: IOffice) => {
            const component = this.resolver.resolveComponentFactory(OfficePopupComponent).create(this.injector);
            component.instance.data = office;
            return new Marker(
                [office.latitude, office.longitude],
                {icon: this.officeMarkerIco}
            ).bindPopup(
                component.location.nativeElement
            );
        });
    }

    private nestedBonusLocationsMarkerGenerator(bonus: IBonus): Marker[]{
        return bonus.locations.map( location => {
            return new Marker(
                [location.coordinates.latitude, location.coordinates.longitude],
                {icon: this.bonusMarkerIco}
            ).bindPopup(
                'component.location.nativeElement'
            );
        });
    }

    public createBonusesMarkers(bonuses: IBonus[]): Marker[]{
        let markers: Marker[] = [];
        bonuses.forEach((bonus: IBonus) => {
            const bonusLocationsMarkers = this.nestedBonusLocationsMarkerGenerator(bonus);
            markers = [...markers, ...bonusLocationsMarkers];
        });
        return markers;
    }
}
