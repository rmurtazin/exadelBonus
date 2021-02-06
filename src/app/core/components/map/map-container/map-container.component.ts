import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { IOffice } from '@interfaces/office.interface';
import { IBonus } from '@interfaces/bonus.interface';
import { Map, Marker, layerGroup, latLng, LatLng, Control, DomUtil } from 'leaflet';
import { BonusesService } from '@services/bonuses.service';
import { OfficesService } from '@services/offices.service';
import { MapEventsService } from '@services/map-events.service';
import { ActivatedRoute } from '@angular/router';
import { ToasterService } from '@services/toaster.service';
import { MarkerModel } from '@models/marker.model';
import { LocationService } from '@services/location.service';
import 'leaflet.markercluster';

@Component({
  selector: 'app-map-container',
  templateUrl: './map-container.component.html',
  styleUrls: ['./map-container.component.scss'],
  providers: [MarkerModel, LocationService],
})
export class MapComponent implements OnDestroy {
  private map: Map;
  private queryLatitude: string;
  private queryLongitude: string;
  private subscription = new Subscription();

  constructor(
    private officeService: OfficesService,
    private bonusesService: BonusesService,
    private markerModel: MarkerModel,
    private mapEvents: MapEventsService,
    private activateRouter: ActivatedRoute,
    private toaster: ToasterService,
    private locationService: LocationService
  ) {}

  public mapReadyEvent(map: Map): void {
    this.map = map;
    this.changeMapViewObserver();
    this.getQueryParams();
    this.displayOfficesMarkers();
    this.displayBonusesMarkers();
    this.officeMarkerClickObserver();
    this.mapViewObserver();
  }

  private getQueryParams(): void {
    this.subscription.add(
      this.activateRouter.queryParams.subscribe((params) => {
        this.queryLatitude = params?.lat;
        this.queryLongitude = params?.lon;
      }),
    );
  }

  private displayOfficesMarkers(): void {
    this.subscription.add(
      this.officeService.getOffices().subscribe((offices: IOffice[]) => {
        const bonusesMarkers = this.markerModel.createOfficesMarkers(offices);
        layerGroup(bonusesMarkers).addTo(this.map);
      }),
    );
  }

  private displayBonusesMarkers(): void {
    this.subscription.add(
      this.bonusesService.getBonuses().subscribe((bonuses: IBonus[]) => {
        const markers: Marker[] = this.markerModel.createBonusesMarkers(bonuses);
        const markersGroup = this.markerModel.createMarkerCluster(markers);
        markersGroup.addTo(this.map);
        let navigationSuccess = true;
        if (this.queryLatitude && this.queryLongitude) {
          navigationSuccess = this.navigateToMarker(markers);
        }
        if (!navigationSuccess) {
          this.toaster.showError('Bonus not available', 'Error');
        }
      }),
    );
  }

  private navigateToMarker(markers: Marker[]): boolean {
    const isRequestedLocation = (currentMarker: Marker) => {
      const { lat, lng } = currentMarker.getLatLng();
      return lng === Number(this.queryLongitude) && lat === Number(this.queryLatitude);
    };
    const [targetMarker] = markers.filter(isRequestedLocation);
    if (!targetMarker) {
      return false;
    }
    this.setMapView(targetMarker.getLatLng());
    targetMarker.openPopup();
    return true;
  }

  private officeMarkerClickObserver(): void {
    this.subscription.add(
      this.mapEvents.zoomToOfficeObserver().subscribe((office: IOffice) => {
        const location = latLng(office.latitude, office.longitude);
        const zoom = 11;
        this.map.flyTo(location, zoom);
        this.map.closePopup();
      }),
    );
  }

  private mapViewObserver(): void {
    this.subscription.add(
      this.mapEvents.changeMapLocationObserver().subscribe((location: LatLng) => {
        this.setMapView(location);
      }),
    );
  }

  public changePlace(): void{
    this.locationService.selectPlaceDialog();
  }

  private changeMapViewObserver(): void{
    this.subscription.add(
      this.mapEvents.changeMapLocationObserver().subscribe((location: LatLng) => {
        this.setMapView(location);
      })
    );
  }

  private setMapView(location: LatLng): void{
    const zoom = 11;
    this.map.setView(location, zoom);
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
