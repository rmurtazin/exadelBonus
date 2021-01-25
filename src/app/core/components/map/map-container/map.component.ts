import { Component, OnInit, OnDestroy } from '@angular/core';
import { ApiService , MarkersService } from 'services/.';
import { Observable, Subscription } from 'rxjs';
import { IBonus, IOffice } from 'interfaces/.';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit, OnDestroy {
  private officesSubscription: Subscription;
  private bonusesSubscription: Subscription;
  private map: L.Map;

  constructor(
    private api: ApiService,
    private markers: MarkersService
  ) {}

  ngOnInit(): void {}

  mapReadyEvent(map: L.Map): void {
    this.map = map;
    this.displayOfficesMarkers();
    this.displayBonusesMarkers();
  }

  displayOfficesMarkers(): void {
    this.officesSubscription = this.api.getOffices()
      .subscribe((offices: IOffice[]) => {
        const bonusesMarkers: L.Marker[] = this.markers.createOfficesMarkers(offices);
        L.layerGroup(bonusesMarkers).addTo(this.map);
      });
  }

  displayBonusesMarkers(): void {
    this.bonusesSubscription = this.api.getBonuses()
      .subscribe((bonuses: IBonus[]) => {
        const bonusesMarkers: L.Marker[] = this.markers.createBonusesMarkers(bonuses);
        L.layerGroup(bonusesMarkers).addTo(this.map);
      });
  }

  ngOnDestroy(): void {
    this.officesSubscription.unsubscribe();
    this.bonusesSubscription.unsubscribe();
  }


}
