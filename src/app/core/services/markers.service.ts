import { ComponentFactoryResolver, Injectable, Injector } from '@angular/core';
import { Marker, Icon, PointExpression, DivIcon, bounds} from 'leaflet';
import { IOffice } from '@interfaces/office.interface';
import { IBonus } from '@interfaces/bonus.interface';
import { OfficePopupComponent } from '@components/map/office-popup/office-popup.component';
import { BonusPopupComponent } from '@components/map/bonus-popup/bonus-popup.component';
import { MarkerIconComponent } from '@components/map/marker-icon/marker-icon.component';
import { MarkersIcons } from '../enums/markers-icons.enum';

@Injectable()
export class MarkersService{
    private iconSize: PointExpression = [32, 32];
    private iconAnchor: PointExpression = [32, 32];
    private popupAnchor: PointExpression = [-15, -35];

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

    private bonusMarkerIco = (type: string): DivIcon => {
        let icon = MarkersIcons.default;
        console.log(type, Object.keys(MarkersIcons).includes(type));
        if (Object.keys(MarkersIcons).includes(type)){
            icon = MarkersIcons[type];
        }
        const component = this.resolver.resolveComponentFactory(MarkerIconComponent).create(this.injector);
        component.instance.icon = icon;
        component.changeDetectorRef.detectChanges();
        return new DivIcon({
            html: component.location.nativeElement,
            className: 'marker-pin',
            iconAnchor: this.iconAnchor,
            popupAnchor: this.popupAnchor
        });
    }

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

    private nestedBonusLocationsMarkerGenerator(bonus: IBonus): Marker[] {
        return bonus.locations.map( location => {
            const component = this.resolver.resolveComponentFactory(BonusPopupComponent).create(this.injector);
            const latitude = location.coordinates.latitude;
            const longitude = location.coordinates.longitude;
            component.instance.bonus = bonus;
            component.instance.latitude = latitude;
            component.instance.longitude = longitude;
            component.changeDetectorRef.detectChanges();
            return new Marker(
                [location.coordinates.latitude, location.coordinates.longitude],
                {icon: this.bonusMarkerIco(bonus.type)}
            ).bindPopup(
                component.location.nativeElement
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
