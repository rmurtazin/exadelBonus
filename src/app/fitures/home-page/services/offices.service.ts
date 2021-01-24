import { Injectable } from "@angular/core";
import { icon, Marker, marker} from 'leaflet';
import { IBonus, IOffice } from "../../../core/interfaces";
import { NgElement, WithProperties } from '@angular/elements';
import { PopupComponent } from '../components/popup-component/popup.component'

@Injectable()
export class OfficeService{

    officeMarkerIco = icon({
        iconUrl: '/assets/icons/office.ico',
        iconSize:     [32, 32],
        iconAnchor:   [32, 32],
        popupAnchor:  [-15, -35]
    });

    createMarkersOfficesMarkers(offices: IOffice[]): Marker[]{
        const markers: Marker[] = offices.map((office: IOffice) => {
            const newMarker: Marker = marker(
                [office.latitude, office.longitude],
                {icon: this.officeMarkerIco})
            ;
            newMarker.bindPopup((layer) => { 
                const popupEl: NgElement & WithProperties<PopupComponent> = 
                document.createElement('popup-element') as any; 
                popupEl.title = office.city;
                popupEl.description = office.address; 
                return popupEl; }, {maxWidth: 100});
            return newMarker;
        });
        return markers;
    }
}