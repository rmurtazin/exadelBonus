import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ComponentFactoryResolver, Injectable, Injector } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { IBonus } from '@interfaces/bonus.interface';
import { IOffice } from '@interfaces/office.interface';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Icon, MarkerClusterGroup } from 'leaflet';
import { ToastrModule } from 'ngx-toastr';
import { BonusPopupComponent } from 'src/app/features/home/map/bonus-popup/bonus-popup.component';
import { MarkerIconComponent } from 'src/app/features/home/map/marker-icon/marker-icon.component';
import { OfficePopupComponent } from 'src/app/features/home/map/office-popup/office-popup.component';
import { MockBonusService } from 'src/app/shared/mocks/services/mock-bonus.service';
import { MockOfficesService } from 'src/app/shared/mocks/services/mock-offices.service';
import { MarkerModel } from './marker.model';

describe('MarkerModel', () => {
  let markerModel: MarkerModel;
  let injector: Injector;
  let factory: ComponentFactoryResolver;
  let bonusService: MockBonusService;
  let officesService: MockOfficesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OfficePopupComponent, MarkerIconComponent, BonusPopupComponent],
      imports: [TranslateModule.forRoot(), HttpClientModule, ToastrModule.forRoot()],
      providers: [],
    });
    injector = TestBed.inject(Injector);
    factory = TestBed.inject(ComponentFactoryResolver);
    markerModel = new MarkerModel(injector, factory);
    bonusService = new MockBonusService();
    officesService = new MockOfficesService();
  });

  it('#createBonusesMarkers', () => {
    const bonuses: IBonus[] = bonusService.getMockBonuses();
    expect(markerModel.createBonusesMarkers(bonuses).length).toEqual(2);
  });

  it('#createBonusesMarkers', () => {
    const offices: IOffice[] = officesService.getMockOffices();
    expect(markerModel.createOfficesMarkers(offices).length).toEqual(2);
  });

  it('#getUserMarkerIco', () => {
    expect(markerModel.getUserMarkerIco()).toBeInstanceOf(Icon);
  });

  it('#createMarkerCluster', () => {
    const bonuses: IBonus[] = bonusService.getMockBonuses();
    const markers = markerModel.createBonusesMarkers(bonuses);
    expect(markerModel.createMarkerCluster(markers)).toBeInstanceOf(MarkerClusterGroup);
  });

  afterAll(() => {
    markerModel = null;
    injector = null;
    factory = null;
  });
});
