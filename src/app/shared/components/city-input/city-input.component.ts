import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { map, startWith } from 'rxjs/operators';
import { FormControl } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { BonusesService } from '@services/bonuses.service';
import { MapEventsService } from '@services/map-events.service';
import { IOffice } from '@interfaces/office.interface';
import { LocationService } from '@services/location.service';
import { LoginService } from '@services/login.service';
import { IUser } from '@interfaces/loginInterface';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-city-input',
  templateUrl: './city-input.component.html',
  styleUrls: ['./city-input.component.scss'],
})
export class CityInputComponent implements OnInit, OnDestroy {
  private subscription = new Subscription();
  public cities: string[];
  public cityInputControl = new FormControl();
  public filteredCity$: Observable<string[]>;
  @Output() changeCityEvent = new EventEmitter<string>();

  constructor(
    private bonusesService: BonusesService,
    private mapEventsService: MapEventsService,
    private locationService: LocationService,
    private loginService: LoginService,
    private translate: TranslateService
  ) {}

  public ngOnInit(): void {
    const currentCity = localStorage.getItem('currentCity');
    if (!currentCity) {
      this.getUserCity();
    } else {
      this.cityInputControl.setValue(currentCity);
      this.changeCity();
    }
    this.chooseOfficeObserver();
    this.changeLocationObserver();
    this.getCities();
  }

  private getUserCity(): void {
    this.subscription.add(
      this.loginService.getUser().subscribe((user: IUser) => {
        this.cityInputControl.setValue(user.city);
        this.changeCity();
      }),
    );
  }

  private chooseOfficeObserver(): void {
    this.subscription.add(
      this.mapEventsService.zoomToOfficeObserver().subscribe((office: IOffice) => {
        this.translate.getTranslation('EN').subscribe(({cities}) => {
          localStorage.setItem('currentCity', cities[office.city]);
          this.cityInputControl.setValue(cities[office.city]);
          this.changeCity();
        });
      }),
    );
  }

  private changeLocationObserver(): void {
    this.subscription.add(
      this.locationService.changeLocationObserver().subscribe({
        next: (city: string) => {
          this.cityInputControl.setValue(city);
          localStorage.setItem('currentCity', city);
          this.changeCity();
        },
      }),
    );
  }

  private getCities(): void {
    this.subscription.add(
      this.bonusesService.getBonusesCities().subscribe((citiesList: string[]) => {
        this.cities = citiesList;
        this.filteredCity$ = this.cityInputControl.valueChanges.pipe(
          startWith(''),
          map((value) => this.searchFilter(value)),
        );
      }),
    );
  }

  private searchFilter(value: string): string[] {
    const filterValue = value.trim().toLocaleLowerCase();
    return this.cities.filter(
      (city: string) => city.toLocaleLowerCase().indexOf(filterValue) === 0,
    );
  }

  public changeCity(): void {
    const value = this.cityInputControl.value.trim();
    localStorage.setItem('currentCity', value);
    this.changeCityEvent.emit(value);
  }

  public reset(): void {
    this.cityInputControl.reset('');
    this.changeCity();
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
