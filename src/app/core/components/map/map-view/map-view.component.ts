import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Map, tileLayer, latLng, MarkerClusterGroup} from 'leaflet';
import 'leaflet.markercluster';

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.scss']
})
export class MapViewComponent implements OnInit {

  @Output() public mapReady = new EventEmitter<Map>();

  public options = {
    layers: [
      tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      {
         maxZoom: 18,
      })
    ],
    zoom: 5,
    center: latLng(46.879966, -121.726909)
  };

  public onMapReady(map: Map): void {
    this.mapReady.emit(map);
  }

  public ngOnInit(): void { }
}
