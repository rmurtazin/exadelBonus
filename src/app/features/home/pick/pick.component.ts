import { Component, ViewChild } from '@angular/core';
import { ResizeDirective } from '../../../shared/directives/resize.directive';

@Component({
  selector: 'app-pick',
  templateUrl: './pick.component.html',
  styleUrls: ['./pick.component.scss'],
})
export class PickComponent {
  @ViewChild(ResizeDirective)
  set appResize (directive: ResizeDirective) {
    this.extraIngredient = directive.ingredient;
  };

  ngAfterViewInit() {
    console.log(this.extraIngredient); // mayo
  }

}
