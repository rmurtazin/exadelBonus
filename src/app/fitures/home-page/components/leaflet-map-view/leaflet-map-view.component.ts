import { Component, OnInit } from '@angular/core';
import { Marker, latLng} from 'leaflet';;
import { Observable } from 'rxjs';
import { ApiService } from 'services/api.service';
import { MarkersService } from '../../services/markers.service';
import { IBonus, IOffice } from 'interfaces/.';
import { OfficeService } from '../../services/offices.service';
import { SharedService } from 'services/comunication.service';

@Component({
  selector: 'leaflet-map-view',
  templateUrl: './leaflet-map-view.component.html',
  styleUrls: ['./leaflet-map-view.component.scss']
})
export class LeafletMapViewComponent implements OnInit {
  map: L.Map;
  options$: Observable<any>; 
  bonuses$: Observable<IBonus[]>;
  offices$: Observable<IOffice[]>;
  layers : Marker[] = [];

  constructor(
    private api: ApiService,
    private markersService: MarkersService,
    private officeService: OfficeService,
    private shared : SharedService
  ) {}

  ngOnInit(): void {
    this.options$ = this.shared.getClickEvent();
    this.bonuses$ = this.api.getBonuses();
    this.offices$ = this.api.getOffices();
    this.options$.subscribe( _ => this.map.setView( latLng(12.00000,12.00000), 5))
    this.bonuses$.subscribe((bonuses: IBonus[]) => {
      this.layers = [
        ...this.layers, 
        ...this.markersService.createMarkersFromBonuses(bonuses)
      ];
    });
    this.offices$.subscribe((offices: IOffice[]) => {
      this.layers = [
        ...this.layers,
        ...this.officeService.createMarkersOfficesMarkers(offices)
      ];
    });
  }

  ready = (map: L.Map) => this.map = map;
}
