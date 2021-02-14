import { Component, Output, EventEmitter } from '@angular/core';
import { Map, tileLayer, latLng, LatLngBounds } from 'leaflet';
import 'leaflet.markercluster';

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.scss'],
})
export class MapViewComponent {
  @Output() public mapReady = new EventEmitter<Map>();
  @Output() public changePlaceEvent = new EventEmitter<any>();
  @Output() public mapZoomEvent = new EventEmitter<any>();

  public options = {
    layers: [
      tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
        minZoom: 2,
      }),
    ],
    zoom: 5,
    center: latLng(46.879966, -121.726909),
  };

  public onMapReady(map: Map): void {
    const bounds = new LatLngBounds(latLng(85, -180), latLng(-85, 180));
    map.setMaxBounds(bounds);
    this.mapReady.emit(map);
  }

  public changePlace(): void {
    this.changePlaceEvent.emit();
  }

  public onMapZoom(): void {
    this.mapZoomEvent.emit();
  }
}
