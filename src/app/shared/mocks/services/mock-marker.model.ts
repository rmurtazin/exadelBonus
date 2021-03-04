import { IBonus } from '@interfaces/bonus.interface';
import { IOffice } from '@interfaces/office.interface';
import { MarkerModel } from '@models/marker.model';
import { DivIcon, latLng, Marker, MarkerClusterGroup } from 'leaflet';

export class MockMarkerModel extends MarkerModel {
  constructor() {
    super(null, null);
  }

  private mockBonusIcon = new DivIcon({ html: '<div>MockBonusMarker</div>' });
  private mockOfficeIcon = new DivIcon({ html: '<div>MockOfficeMarker</div>' });
  public createBonusesMarkers(bonuses: IBonus[]): Marker[] {
    return [new Marker(latLng(0, 0), { icon: this.mockBonusIcon })];
  }

  public createOfficesMarkers(offices: IOffice[]): Marker<any>[] {
    return [new Marker(latLng(0, 1), { icon: this.mockOfficeIcon })];
  }

  public createMarkerCluster(markers: Marker[]): MarkerClusterGroup {
    const [mockMarker] = this.createBonusesMarkers(null);
    return new MarkerClusterGroup({
      iconCreateFunction: () => new DivIcon({ html: '<div>MockClusterMarker</div>' }),
    }).addLayers([mockMarker, mockMarker]);
  }
}
