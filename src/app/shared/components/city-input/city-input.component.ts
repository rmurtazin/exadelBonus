import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { map, startWith } from 'rxjs/operators';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-city-input',
  templateUrl: './city-input.component.html',
  styleUrls: ['./city-input.component.scss'],
})
export class CityInputComponent implements OnInit {
  public cities = ['Vinnytsia', 'Kiev', 'Odessa', 'Minsk', 'Tashkent']; // TODO: fetch from api
  public cityInputControl = new FormControl();
  public filteredCity$: Observable<string[]>;
  @Output() changeCityEvent = new EventEmitter<string>();

  constructor() {}

  public ngOnInit(): void {
    this.filteredCity$ = this.cityInputControl.valueChanges.pipe(
      startWith(''),
      map((value) => this.searchFilter(value)),
    );
  }

  private searchFilter(value: string): string[] {
    const filterValue = value.toLocaleLowerCase();
    return this.cities.filter(
      (city: string) => city.toLocaleLowerCase().indexOf(filterValue) === 0,
    );
  }

  public changeCity(): void {
    console.log(this.cityInputControl.value);
    this.changeCityEvent.emit(this.cityInputControl.value);
  }
}
