import { MatAutocomplete, MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { MatChipInputEvent } from '@angular/material/chips';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { startWith, map } from 'rxjs/operators';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { BonusesService } from '@services/bonuses.service';

@Component({
  selector: 'app-tags-input',
  templateUrl: './tags-input.component.html',
  styleUrls: ['./tags-input.component.scss'],
})
export class TagsInputComponent implements OnInit {
  allTags: string[];
  tags: string[] = [];
  separatorKeysCodes: number[] = [ENTER, COMMA];
  filteredTags: Observable<string[]>;
  tagsControl = new FormControl();
  @Output() public tagsChangedEvent = new EventEmitter<string[]>();
  @ViewChild('tagsInput') public fruitInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto') public matAutocomplete: MatAutocomplete;

  constructor(
    private bonusesService: BonusesService
  ) {}

  public ngOnInit(): void{
    this.bonusesService.getBonusesTags().subscribe((tagsList) => {
      this.allTags = tagsList;
      this.filteredTags = this.tagsControl.valueChanges.pipe(
        startWith(''),
        map((tags: string | null) => (tags ? this.tagsFilter(tags) : this.allTags.slice())),
      );
    });
  }

  public add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    if ((value || '').trim()) {
      this.tags.push(value.trim());
      this.tagsChanged(this.tags);
    }

    if (input) {
      input.value = '';
    }

    this.tagsControl.setValue(null);
  }

  public remove(tag: string): void {
    const index = this.tags.indexOf(tag);

    if (index >= 0) {
      this.tags.splice(index, 1);
      this.tagsChanged(this.tags);
    }
  }

  public selected(event: MatAutocompleteSelectedEvent): void {
    this.tags.push(event.option.viewValue);
    this.tagsChanged(this.tags);
    this.fruitInput.nativeElement.value = '';
    this.tagsControl.setValue(null);
  }

  private tagsChanged(tagsList: string[]): void {
    this.tagsChangedEvent.emit(tagsList);
  }

  private tagsFilter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.allTags.filter((tag) => tag.toLowerCase().indexOf(filterValue) === 0);
  }
}
