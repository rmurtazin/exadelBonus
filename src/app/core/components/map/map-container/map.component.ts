import { Component, OnInit, OnDestroy } from '@angular/core';
import { MarkersService } from '@services/markers.service';
import { Subscription } from 'rxjs';
import { IOffice } from '@interfaces/office.interface';
import { IBonus } from '@interfaces/bonus.interface';
import { Map, Marker, layerGroup} from 'leaflet';
import { BonusesService } from '@services/bonuses.service';
import { OfficesService } from '@services/offices.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit, OnDestroy {
  private subscription = new Subscription();
  private map: Map;

  constructor(
    private officeService: OfficesService,
    private bonusesService: BonusesService,
    private markers: MarkersService
  ) {}

  public ngOnInit(): void {}

  public mapReadyEvent(map: Map): void {
    this.map = map;
    this.displayOfficesMarkers();
    this.displayBonusesMarkers();
  }

  private displayOfficesMarkers(): void {
    this.subscription.add(
      this.officeService.getOffices().subscribe((offices: IOffice[]) => {
        const bonusesMarkers: Marker[] = this.markers.createOfficesMarkers(offices);
        layerGroup(bonusesMarkers).addTo(this.map);
      })
    );
  }

  private displayBonusesMarkers(): void {
    this.subscription.add(
      this.bonusesService.getBonuses().subscribe((bonuses: IBonus[]) => {
        const bonusesMarkers: Marker[] = this.markers.createBonusesMarkers(bonuses);
        layerGroup(bonusesMarkers).addTo(this.map);
      })
    );
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
