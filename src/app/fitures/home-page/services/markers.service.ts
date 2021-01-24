import { Injectable } from "@angular/core";
import { icon, latLng, Marker, marker, Point, tileLayer } from 'leaflet';
import { IBonus, ILocation } from "../../../core/interfaces";
import { NgElement, WithProperties } from '@angular/elements';
import { PopupComponent } from '../components/popup-component/popup.component'

@Injectable()
export class MarkersService{
    bonusMarkerIco = icon({
        iconUrl: '/assets/icons/marker.ico',
        iconSize:     [32, 32],
        iconAnchor:   [32, 32],
        popupAnchor:  [-15, -35]
    });

    bonusLocationsMarkersGenerator(bonus: IBonus): Marker[]{
        const markers: Marker[] = bonus.locations.map( location =>{
            const newMarker: Marker = marker([location.latitude, location.longitude],{icon: this.bonusMarkerIco});
            newMarker.bindPopup((layer) => { 
                const popupEl: NgElement & WithProperties<PopupComponent> = document.createElement('popup-element') as any; 
                popupEl.title = bonus.type;
                popupEl.description = bonus.description;
                popupEl.bonus = bonus; 
                return popupEl; }, {maxWidth: 100});
            return newMarker;
        }) 
        return markers;
    }

    createMarkersFromBonuses(bonuses: IBonus[]): Marker[]{
        let markers: Marker[] = [];
        bonuses.map((bonus: IBonus) => {
            let bonusLocationsMarkers = this.bonusLocationsMarkersGenerator(bonus);
            markers = [...markers, ...bonusLocationsMarkers];
        });
        return markers;
    }
}