import { ComponentFactoryResolver, Injectable, Injector } from '@angular/core';
import { OfficePopupComponent } from '../../features/home/map/office-popup/office-popup.component';
import { ClusterIconComponent } from '../../features/home/map/cluster-icon/cluster-icon.component';
import { BonusPopupComponent } from '../../features/home/map/bonus-popup/bonus-popup.component';
import { MarkerIconComponent } from '../../features/home/map/marker-icon/marker-icon.component';
import { Marker, Icon, PointExpression, DivIcon, MarkerClusterGroup } from 'leaflet';
import { MarkersIcons } from '@enums/markers-icons.enum';
import { IBonus } from '@interfaces/bonus.interface';
import { IOffice } from '@interfaces/office.interface';
import 'leaflet.markercluster';

@Injectable({ providedIn: 'root' })
export class MarkerModel {
  constructor(private injector: Injector, private resolver: ComponentFactoryResolver) {}
  private iconSize: PointExpression = [32, 32];
  private iconAnchor: PointExpression = [32, 32];
  private popupAnchor: PointExpression = [-15, -35];

  private officeMarkerIco = new Icon({
    iconUrl: '/assets/icons/office.png',
    iconSize: this.iconSize,
    iconAnchor: this.iconAnchor,
    popupAnchor: this.popupAnchor,
  });

  private userMarkerIco = new Icon({
    iconUrl: 'assets/icons/user-marker.ico',
    iconAnchor: this.iconAnchor,
    iconSize: this.iconSize,
  });

  private bonusMarkerIco(type: string): DivIcon {
    let icon = MarkersIcons.default;
    if (Object.keys(MarkersIcons).includes(type)) {
      icon = MarkersIcons[type];
    }
    const component = this.resolver
      .resolveComponentFactory(MarkerIconComponent)
      .create(this.injector);
    component.instance.icon = icon;
    component.changeDetectorRef.detectChanges();
    return new DivIcon({
      html: component.location.nativeElement,
      className: 'marker-pin',
      iconAnchor: this.iconAnchor,
      popupAnchor: this.popupAnchor,
    });
  }

  private iconCreateFunction(cluster): DivIcon {
    const component = this.resolver
      .resolveComponentFactory(ClusterIconComponent)
      .create(this.injector);
    component.instance.childCount = cluster.getChildCount();
    component.changeDetectorRef.detectChanges();
    return new DivIcon({
      html: component.location.nativeElement,
      className: 'cluster-icon',
      iconAnchor: this.iconAnchor,
    });
  }

  public getUserMarkerIco(): Icon {
    return this.userMarkerIco;
  }

  public createOfficesMarkers(offices: IOffice[]): Marker[] {
    return offices.map((office: IOffice) => {
      const component = this.resolver
        .resolveComponentFactory(OfficePopupComponent)
        .create(this.injector);
      component.instance.office = office;
      component.changeDetectorRef.detectChanges();
      return new Marker([office.latitude, office.longitude], {
        icon: this.officeMarkerIco,
      }).bindPopup(component.location.nativeElement);
    });
  }

  private nestedBonusLocationsMarkerGenerator(bonus: IBonus): Marker[] {
    return bonus.locations.map((location) => {
      const component = this.resolver
        .resolveComponentFactory(BonusPopupComponent)
        .create(this.injector);
      component.instance.bonus = bonus;
      component.instance.latitude = location.latitude;
      component.instance.longitude = location.longitude;
      component.changeDetectorRef.detectChanges();
      return new Marker([location.latitude, location.longitude], {
        icon: this.bonusMarkerIco(bonus.type),
        title: bonus.company.name,
        alt: bonus.company.name,
      }).bindPopup(component.location.nativeElement);
    });
  }

  public createBonusesMarkers(bonuses: IBonus[]): Marker[] {
    let markers: Marker[] = [];
    bonuses.forEach((bonus: IBonus) => {
      const bonusLocationsMarkers = this.nestedBonusLocationsMarkerGenerator(bonus);
      markers = [...markers, ...bonusLocationsMarkers];
    });
    return markers;
  }

  public createMarkerCluster(markers: Marker[]): MarkerClusterGroup {
    return new MarkerClusterGroup({
      iconCreateFunction: this.iconCreateFunction.bind(this),
    }).addLayers(markers);
  }
}
