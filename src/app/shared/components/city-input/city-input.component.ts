import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { map, startWith } from 'rxjs/operators';
import { FormControl } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { CityService } from '@services/city.service';
import { LocationService } from '@services/location.service';
@Component({
  selector: 'app-city-input',
  templateUrl: './city-input.component.html',
  styleUrls: ['./city-input.component.scss'],
})
export class CityInputComponent implements OnInit {
  private subscription = new Subscription();
  public cities = ['Vinnytsia', 'Kiev', 'Odessa', 'Minsk', 'Tashkent']; // TODO: fetch from api
  public cityInputControl = new FormControl();
  public filteredCity$: Observable<string[]>;
  @Output() changeCityEvent = new EventEmitter<string>();

  constructor(
    private citiesService: CityService
  ) {}

  public ngOnInit(): void {
    this.getCities();
    this.filteredCity$ = this.cityInputControl.valueChanges.pipe(
      startWith(''),
      map((value) => this.searchFilter(value)),
    );
  }
  private getCities(): void {
    this.subscription.add(
      this.citiesService.getCities().subscribe((citiesList: string[]) => {
        this.cities = citiesList;
      })
    );
  }

  private searchFilter(value: string): string[] {
    const filterValue = value.toLocaleLowerCase();
    return this.cities.filter(
      (city: string) => city.toLocaleLowerCase().indexOf(filterValue) === 0,
    );
  }

  public changeCity(): void {
    this.changeCityEvent.emit(this.cityInputControl.value);
  }
}
