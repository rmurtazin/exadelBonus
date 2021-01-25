import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.scss']
})
export class MapViewComponent implements OnInit {

  @Output() mapReady = new EventEmitter<L.Map>();

  options = {
    layers: [
      L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      {
         maxZoom: 18,
      })
    ],
    zoom: 5,
    center: L.latLng(46.879966, -121.726909)
  };

  onMapReady = (map: L.Map) => this.mapReady.emit(map);

  ngOnInit(): void { }

}
