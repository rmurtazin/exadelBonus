import { Component, OnDestroy } from '@angular/core';
import { MarkersService } from '@services/markers.service';
import { Subscription } from 'rxjs';
import { IOffice } from '@interfaces/office.interface';
import { IBonus } from '@interfaces/bonus.interface';
import { Map, Marker, layerGroup, latLng } from 'leaflet';
import { BonusesService } from '@services/bonuses.service';
import { OfficesService } from '@services/offices.service';
import { MarkerEventsService } from '@services/markers-events.service';
import { ActivatedRoute } from '@angular/router';
import { ToasterService } from '@services/toaster.service';
import 'leaflet.markercluster';

@Component({
  selector: 'app-map-container',
  templateUrl: './map-container.component.html',
  styleUrls: ['./map-container.component.scss']
})
export class MapComponent implements OnDestroy {
  private subscription = new Subscription();
  private map: Map;
  private queryLatitude: string;
  private queryLongitude: string;

  constructor(
    private officeService: OfficesService,
    private bonusesService: BonusesService,
    private markersService: MarkersService,
    private markerEvents: MarkerEventsService,
    private activateRouter: ActivatedRoute,
    private toaster: ToasterService
  ) {}

  public mapReadyEvent(map: Map): void {
    this.map = map;
    this.getQueryParams();
    this.displayOfficesMarkers();
    this.displayBonusesMarkers();
    this.officeMarkerClickObserver();
  }

  private getQueryParams(): void{
    this.subscription.add(
      this.activateRouter.queryParams.subscribe(params => {
        this.queryLatitude = params?.lat;
        this.queryLongitude = params?.lon;
      })
    );
  }

  private displayOfficesMarkers(): void {
    this.subscription.add(
      this.officeService.getOffices().subscribe((offices: IOffice[]) => {
        const bonusesMarkers = this.markersService.createOfficesMarkers(offices);
        layerGroup(bonusesMarkers).addTo(this.map);
      })
    );
  }

  private displayBonusesMarkers(): void {
    this.subscription.add(
      this.bonusesService.getBonuses().subscribe((bonuses: IBonus[]) => {
        const markers: Marker[] = this.markersService.createBonusesMarkers(bonuses);
        const markersGroup = this.markersService.createMarkerCluster(markers);
        markersGroup.addTo(this.map);
        let navigationSuccess = true;
        if (this.queryLatitude && this.queryLongitude){
          navigationSuccess = this.navigateToMarker(markers);
        }
        if (!navigationSuccess){
          this.toaster.showError('Bonus not available', 'Error');
        }
      })
    );
  }

  private navigateToMarker(markers: Marker[]): boolean{
    const isRequestedLocation = (currentMarker: Marker) =>  {
      const {lat, lng} = currentMarker.getLatLng();
      return lng === Number(this.queryLongitude) &&
        lat === Number(this.queryLatitude);
    };
    const [targetMarker] = markers.filter(isRequestedLocation);
    if (!targetMarker){
      return false;
    }
    const zoom = 11;
    this.map.setView(targetMarker.getLatLng(), zoom);
    targetMarker.openPopup();
    return true;
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
