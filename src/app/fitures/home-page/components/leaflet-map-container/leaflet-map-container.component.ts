import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { LatLng, latLng, MapOptions } from 'leaflet';
import { mapOptions } from 'constants/leaflet-map.constants';
import { LeafletDirective } from '@asymmetrik/ngx-leaflet';

@Component({
  selector: 'leaflet-map-container',
  templateUrl: './leaflet-map-container.component.html',
  styleUrls: ['./leaflet-map-container.component.scss']
})
export class LeafletMapContainerComponent implements OnInit {
  @Input() layers: any;
  @Output() mapReady = new EventEmitter<L.Map>(); 

  center: LatLng;
  latitude: number;
  longitude: number;
  options: MapOptions;

  constructor(){
    this.latitude = Number(localStorage.getItem('defaultLatitude')) || 48.6473728; 
    this.longitude = Number(localStorage.getItem('defaultLongitude')) || 29.7402368;
    this.center = latLng(this.latitude, this.longitude);
    this.options = { ...mapOptions, center: this.center}
  }

  ngOnInit(): void {}
  onMapReady = (map: L.Map) => this.mapReady.emit(map);
}
