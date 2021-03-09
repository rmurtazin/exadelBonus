import { MatAutocomplete, MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import {
  Component,
  ElementRef,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { MatChipInputEvent } from '@angular/material/chips';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { startWith, map } from 'rxjs/operators';
import { FormControl } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { BonusesService } from '@services/bonuses.service';

@Component({
  selector: 'app-tags-input',
  templateUrl: './tags-input.component.html',
  styleUrls: ['./tags-input.component.scss'],
})
export class TagsInputComponent implements OnInit, OnDestroy {
  private subscription = new Subscription();
  public allTags: string[];
  public selectedTags: string[] = [];
  public separatorKeysCodes: number[] = [ENTER, COMMA];
  public filteredTags: Observable<string[]>;
  public tagsControl = new FormControl();
  @Output() public tagsChangedEvent = new EventEmitter<string[]>();
  @ViewChild('tagsInput') public tagsInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto') public matAutocomplete: MatAutocomplete;

  constructor(private bonusesService: BonusesService) {}

  public ngOnInit(): void {
    this.subscription.add(
      this.bonusesService.getBonusesTags().subscribe((tagsList) => {
        this.allTags = tagsList;
        this.filteredTags = this.tagsControl.valueChanges.pipe(
          startWith(''),
          map((tags: string | null) => (tags ? this.tagsFilter(tags) : this.allTags.slice())),
        );
      }),
    );
  }

  public add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    if ((value || '').trim()) {
      this.selectedTags.push(value.trim());
      this.tagsChanged(this.selectedTags);
    }

    if (input) {
      input.value = '';
    }

    this.tagsControl.setValue(null);
  }

  public remove(tag: string): void {
    const index = this.selectedTags.indexOf(tag);

    if (index >= 0) {
      this.selectedTags.splice(index, 1);
      this.tagsChanged(this.selectedTags);
    }
  }

  public selected(event: MatAutocompleteSelectedEvent): void {
    this.selectedTags.push(event.option.viewValue);
    this.tagsChanged(this.selectedTags);
    this.tagsInput.nativeElement.value = '';
    this.tagsControl.setValue(null);
  }

  private tagsChanged(tagsList: string[]): void {
    this.tagsChangedEvent.emit(tagsList);
  }

  private tagsFilter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.allTags.filter((tag) => tag.toLowerCase().indexOf(filterValue) === 0);
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
