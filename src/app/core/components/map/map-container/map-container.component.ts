import { Component, OnInit, OnDestroy, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { MarkersService } from '@services/markers.service';
import { Subscription } from 'rxjs';
import { IOffice } from '@interfaces/office.interface';
import { IBonus } from '@interfaces/bonus.interface';
import { Map, Marker, layerGroup, latLng } from 'leaflet';
import { BonusesService } from '@services/bonuses.service';
import { OfficesService } from '@services/offices.service';
import { MarkerEventsService } from '@services/markers-events.service';

@Component({
  selector: 'app-map-container',
  templateUrl: './map-container.component.html',
  styleUrls: ['./map-container.component.scss'],
})
export class MapComponent implements OnInit, OnDestroy {
  private subscription = new Subscription();
  private map: Map;

  constructor(
    private officeService: OfficesService,
    private bonusesService: BonusesService,
    private markersService: MarkersService,
    private markerEvents: MarkerEventsService,
  ) {}

  public ngOnInit(): void {}

  public mapReadyEvent(map: Map): void {
    this.map = map;
    this.displayOfficesMarkers();
    this.displayBonusesMarkers();
    this.officeMarkerClickObserver();
  }

  private displayOfficesMarkers(): void {
    this.subscription.add(
      this.officeService.getOffices().subscribe((offices: IOffice[]) => {
        const bonusesMarkers: Marker[] = this.markersService.createOfficesMarkers(offices);
        layerGroup(bonusesMarkers).addTo(this.map);
      }),
    );
  }

  private displayBonusesMarkers(): void {
    this.subscription.add(
      this.bonusesService.getBonuses().subscribe((bonuses: IBonus[]) => {
        const bonusesMarkers: Marker[] = this.markersService.createBonusesMarkers(bonuses);
        layerGroup(bonusesMarkers).addTo(this.map);
      }),
    );
  }

  private officeMarkerClickObserver(): void {
    this.subscription.add(
      this.markerEvents.officeMarkerClickObserver().subscribe((office: IOffice) => {
        const location = latLng(office.latitude, office.longitude);
        const zoom = 11;
        this.map.setView(location, zoom);
        this.map.closePopup();
      }),
    );
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
