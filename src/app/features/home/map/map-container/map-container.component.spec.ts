import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { ToastrModule } from 'ngx-toastr';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MapComponent } from './map-container.component';
import { MarkerModel } from '@models/marker.model';
import { BonusesService } from '@services/bonuses.service';
import { FilterService } from '@services/filter.service';
import { LocationService } from '@services/location.service';
import { MapEventsService } from '@services/map-events.service';
import { ToasterService } from '@services/toaster.service';
import { MockOfficesService } from 'src/app/shared/mocks/services/mock-offices.service';
import { MockBonusService } from 'src/app/shared/mocks/services/mock-bonus.service';
import { OfficesService } from '@services/offices.service';
import { MapViewComponent } from '../map-view/map-view.component';
import { MatIconModule } from '@angular/material/icon';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import 'zone.js/dist/long-stack-trace-zone';
import 'zone.js/dist/proxy.js';
import 'zone.js/dist/sync-test';
import 'zone.js/dist/jasmine-patch';
import 'zone.js/dist/async-test';
import 'zone.js/dist/fake-async-test';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { MatOptionModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { SharedModule } from 'src/app/shared/shared.module';

describe('MapComponent', () => {
  let component: MapComponent;
  let fixture: ComponentFixture<MapComponent>;
  let bonusService: BonusesService;
  let officeService: OfficesService;
  let fillterService: FilterService;

  beforeEach(async () => {
    bonusService = new MockBonusService();
    officeService = new MockOfficesService();
    fillterService = new FilterService(bonusService);
    await TestBed.configureTestingModule({
      declarations: [MapComponent, MapViewComponent],
      imports: [
        HttpClientModule,
        RouterTestingModule,
        LeafletModule,
        ToastrModule.forRoot(),
        MatDialogModule,
        MatOptionModule,
        MatFormFieldModule,
        MatIconModule,
        BrowserAnimationsModule,
        TranslateModule.forRoot(),
      ],
      providers: [
        { provide: OfficesService, useValue: officeService },
        { provide: BonusesService, useValue: bonusService },
        { provide: FilterService, useValue: fillterService },
        LocationService,
        MapEventsService,
        MarkerModel,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MapComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should dispaly inputed icon', () => {
    const spy = spyOn(component, 'mapReadyEvent');
    fixture.detectChanges();
    expect(spy).toHaveBeenCalled();
  });

  it('should coll get offices method in officeService', () => {
    const spy = spyOn(officeService, 'getOffices');
    fixture.detectChanges();
    expect(spy).toHaveBeenCalled();
  });
});
