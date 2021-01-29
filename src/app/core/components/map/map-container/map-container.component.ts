import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { MarkersService } from '@services/markers.service';
import { Subscription } from 'rxjs';
import { IOffice } from '@interfaces/office.interface';
import { IBonus } from '@interfaces/bonus.interface';
import { Map, Marker, layerGroup, latLng, Layer, marker} from 'leaflet';
import { BonusesService } from '@services/bonuses.service';
import { OfficesService } from '@services/offices.service';
import { MarkerEventsService } from '@services/markers-events.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-map-container',
  templateUrl: './map-container.component.html',
  styleUrls: ['./map-container.component.scss']
})
export class MapComponent implements OnInit, OnDestroy, AfterViewInit {
  private subscription = new Subscription();
  private map: Map;
  private queryLatitude: string;
  private queryLongitude: string;
  private bonusesMarkers: Marker[]; 
  constructor(
    private officeService: OfficesService,
    private bonusesService: BonusesService,
    private markersService: MarkersService,
    private markerEvents: MarkerEventsService,
    private router: ActivatedRoute
  ) {}

  ngAfterViewInit(): void {}

  public ngOnInit(): void {}

  public mapReadyEvent(map: Map): void {
    this.map = map;
    this.getQueryParams();
    this.displayOfficesMarkers();
    this.displayBonusesMarkers();
    this.officeMarkerClickObserver();
  }

  private getQueryParams(): void{
    this.router?.queryParams.subscribe(params => {
      this.queryLatitude = params?.lan;
      this.queryLongitude = params?.lon;
    });
  }

  private displayOfficesMarkers(): void {
    this.subscription.add(
      this.officeService.getOffices().subscribe((offices: IOffice[]) => {
        const bonusesMarkers = this.markersService.createOfficesMarkers(offices);
        const group = layerGroup(bonusesMarkers).addTo(this.map);
        group.eachLayer((layer: Layer) => {
          console.log(layer)
          layer.openPopup();
        })
      })
    );
  }

  private displayBonusesMarkers(): void {
    this.subscription.add(
      this.bonusesService.getBonuses().subscribe((bonuses: IBonus[]) => {
        const bonusesMarkers: {marker: Marker, latitude: number,  longitude: number}[] = this.markersService.createBonusesMarkers(bonuses);
        layerGroup(bonusesMarkers.map(elem => elem.marker)).addTo(this.map);
        let [targetMarker] = bonusesMarkers.filter(marker => marker.longitude == +this.queryLongitude && marker.latitude === +this.queryLatitude );
        console.log(targetMarker.marker);
        targetMarker.marker.openPopup();
        this.map.setView(latLng(targetMarker.latitude,targetMarker.longitude),11)
      })
    );
  }

  private officeMarkerClickObserver(): void {
    this.subscription.add(
      this.markerEvents.officeMarkerClickObserver().subscribe(
        (office: IOffice) => {
          const location = latLng(office.latitude, office.longitude);
          const zoom = 11;
          this.map.flyTo( location, zoom );
          this.map.closePopup();
        }
      )
    );
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
