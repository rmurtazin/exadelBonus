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
    this.dispayOfficesMarkers();
    this.dispayBonusesMarkers();
  }

  dispayOfficesMarkers(): void {
    this.officesSubscription = this.api.getOffices()
      .subscribe((offices: IOffice[]) => {
        const bonusesMarkers: L.Marker[] = this.markers.createOffocesMarkers(offices);
        L.layerGroup(bonusesMarkers).addTo(this.map);
      });
  }

  dispayBonusesMarkers(): void {
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
