import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { IOffice } from '@interfaces/office.interface';
import { IBonus } from '@interfaces/bonus.interface';
import { Map, Marker, layerGroup, latLng, LatLng, Control, DomUtil, Icon, MarkerClusterGroup } from 'leaflet';
import { BonusesService } from '@services/bonuses.service';
import { OfficesService } from '@services/offices.service';
import { MapEventsService } from '@services/map-events.service';
import { ActivatedRoute } from '@angular/router';
import { ToasterService } from '@services/toaster.service';
import { MarkerModel } from '@models/marker.model';
import { LocationService } from '@services/location.service';
import 'leaflet.markercluster';
import { FilterService } from '@services/filter.service';

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
  private markersGroup: MarkerClusterGroup;

  constructor(
    private officeService: OfficesService,
    private bonusesService: BonusesService,
    private markerModel: MarkerModel,
    private mapEvents: MapEventsService,
    private activateRouter: ActivatedRoute,
    private toaster: ToasterService,
    private locationService: LocationService,
    private filterService: FilterService
  ) {}

  public mapReadyEvent(map: Map): void {
    this.map = map;
    this.mapViewObserver();
    this.getQueryParams();
    this.displayOfficesMarkers();
    this.getMarkersSubscription();
    this.officeMarkerClickObserver();
    this.applyFilterSubscription();
  }

  private applyFilterSubscription(): void {
    this.subscription.add(
      this.filterService.filterAppliedObserver().subscribe(
        (bonuses: IBonus[]) => {
          this.displayBonusesMarkers(bonuses);
        }
      )
    );
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

  private getMarkersSubscription(): void{
    this.subscription.add(
      this.bonusesService.getBonuses().subscribe((bonuses: IBonus[]) => {
        this.displayBonusesMarkers(bonuses);
      })
    );
  }

  private displayBonusesMarkers(bonuses: IBonus[]): void {
    if (this.markersGroup){
      this.map.removeLayer(this.markersGroup);
    }
    const markers: Marker[] = this.markerModel.createBonusesMarkers(bonuses);
    this.markersGroup = this.markerModel.createMarkerCluster(markers);
    this.markersGroup.addTo(this.map);
    this.navigateToMarker(markers);
  }

  private navigateToMarker(markers: Marker[]): void {
    if (!this.queryLatitude && !this.queryLongitude) {
      return;
    }
    const isRequestedLocation = (currentMarker: Marker) => {
      const { lat, lng } = currentMarker.getLatLng();
      return lng === Number(this.queryLongitude) && lat === Number(this.queryLatitude);
    };
    const [targetMarker] = markers.filter(isRequestedLocation);
    if (!targetMarker) {
      this.toaster.showError('Bonus not available', 'Error');
      return;
    }
    this.setMapView(targetMarker.getLatLng(), false);
    targetMarker.openPopup();
  }

  private officeMarkerClickObserver(): void {
    this.subscription.add(
      this.mapEvents.zoomToOfficeObserver().subscribe((office: IOffice) => {
        const location = latLng(office.latitude, office.longitude);
        this.setMapView(location);
        this.map.closePopup();
      }),
    );
  }

  private mapViewObserver(): void {
    this.subscription.add(
      this.mapEvents.changeMapViewObserver().subscribe((parameters) => {
        this.setMapView(parameters.location, parameters.showUserMarker);
      }),
    );
  }

  public changePlace(): void {
    this.locationService.selectPlaceDialog();
  }

  private setMapView(location: LatLng, showUserMarker?: boolean): void {
    const zoom = 11;
    this.map.flyTo(location, zoom);
    if (showUserMarker) {
      this.showUserLocation(location);
    }
  }

  private showUserLocation(location: LatLng): void {
    const icon: Icon = this.markerModel.getUserMarkerIco();
    new Marker(location, { icon }).addTo(this.map);
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
