import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { ToastrModule } from 'ngx-toastr';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MapComponent } from './map-container.component';
import { MarkerModel } from '@models/marker.model';
import { BonusesService } from '@services/bonuses.service';
import { FilterService } from '@services/filter.service';
import { LocationService } from '@services/location.service';
import { MapEventsService } from '@services/map-events.service';
import { MockOfficesService } from 'src/app/shared/mocks/services/mock-offices.service';
import { MockBonusService } from 'src/app/shared/mocks/services/mock-bonus.service';
import { OfficesService } from '@services/offices.service';
import { MapViewComponent } from '../map-view/map-view.component';
import { MatIconModule } from '@angular/material/icon';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { TranslateModule } from '@ngx-translate/core';
import { MatOptionModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { OfficePopupComponent } from '../office-popup/office-popup.component';
import { BonusPopupComponent } from '../bonus-popup/bonus-popup.component';
import { of } from 'rxjs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('MapComponent', () => {
  let component: MapComponent;
  let fixture: ComponentFixture<MapComponent>;
  let bonusService: MockBonusService;
  let officeService: MockOfficesService;
  let fillterService: FilterService;
  let markerModel: MarkerModel;

  beforeEach(async () => {
    bonusService = new MockBonusService();
    officeService = new MockOfficesService();
    fillterService = new FilterService(bonusService);
    await TestBed.configureTestingModule({
      declarations: [OfficePopupComponent, BonusPopupComponent, MapComponent, MapViewComponent],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        RouterTestingModule,
        LeafletModule,
        ToastrModule.forRoot(),
        MatFormFieldModule,
        MatDialogModule,
        MatOptionModule,
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
    markerModel = TestBed.inject(MarkerModel);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should coll mapReadyEvent', () => {
    const spy = spyOn(component, 'mapReadyEvent');
    fixture.detectChanges();
    expect(spy).toHaveBeenCalled();
  });

  it('should add office markers', () => {
    const mockOffices = officeService.getMockOffices();
    const officeServiceSpy = spyOn(officeService, 'getOffices').and.returnValue(of(mockOffices));
    fixture.detectChanges();
    expect(officeServiceSpy).toHaveBeenCalled();
    fixture.detectChanges();
    expect(fixture.nativeElement.innerHTML).toContain('office.png');
  });
});
