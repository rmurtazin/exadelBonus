import { ComponentFactoryResolver, Injectable, Injector } from '@angular/core';
import { Marker, Icon, PointExpression } from 'leaflet';
import { IOffice } from '@interfaces/office.interface';
import { IBonus } from '@interfaces/bonus.interface';
import { OfficePopupComponent } from '@components/map/office-popup/office-popup.component';
import { BonusPopupComponent } from '@components/map/bonus-popup/bonus-popup.component';

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
        private injector: Injector,
        private resolver: ComponentFactoryResolver
        ){}

    public createOfficesMarkers(offices: IOffice[]): Marker[] {
        return offices.map((office: IOffice) => {
            const component = this.resolver.resolveComponentFactory(OfficePopupComponent).create(this.injector);
            component.instance.office = office;
            component.changeDetectorRef.detectChanges();
            return new Marker(
                [office.latitude, office.longitude],
                {icon: this.officeMarkerIco}
            ).bindPopup(
                component.location.nativeElement
            );
        });
    }

    private nestedBonusLocationsMarkerGenerator(bonus: IBonus): {marker: Marker, latitude: number,  longitude: number}[] {
        return bonus.locations.map( location => {
            const component = this.resolver.resolveComponentFactory(BonusPopupComponent).create(this.injector);
            component.instance.bonus = bonus;
            component.changeDetectorRef.detectChanges();
            const latitude = location.coordinates.latitude;
            const longitude = location.coordinates.longitude;
            const marker = new Marker(
                [latitude, longitude],
                {icon: this.bonusMarkerIco, attribution: `${latitude}-${longitude}`}
            ).bindPopup(
                component.location.nativeElement
            );
            return {
                marker,
                latitude,
                longitude
            }
        });
    }

    public createBonusesMarkers(bonuses: IBonus[]): {marker: Marker, latitude: number,  longitude: number}[]{
        let markers: {marker: Marker, latitude: number,  longitude: number}[] = [];
        bonuses.forEach((bonus: IBonus) => {
            const bonusLocationsMarkers = this.nestedBonusLocationsMarkerGenerator(bonus);
            markers = [...markers, ...bonusLocationsMarkers];
        });
        return markers;
    }
}
