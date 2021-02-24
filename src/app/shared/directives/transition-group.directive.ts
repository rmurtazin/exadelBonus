import { Subscription } from 'rxjs';
import {
  AfterContentInit,
  ContentChildren,
  Directive,
  ElementRef,
  Input,
  QueryList,
  OnDestroy
} from '@angular/core';

@Directive({
  selector: '[appTransitionGroupItem]'
})
export class TransitionGroupItemDirective {
  prevPos: any;
  newPos: any;
  el: HTMLElement;
  moved: boolean;
  moveCallback: any;

  constructor(elementRef: ElementRef) {
    this.el = elementRef.nativeElement;
  }
}

@Directive({
  selector: '[appTransitionGroup]'
})

export class TransitionGroupDirective implements AfterContentInit, OnDestroy {

  private changesSubscription: Subscription;
  @Input('appTransitionGroup') class: string;

  @ContentChildren(TransitionGroupItemDirective) items: QueryList<TransitionGroupItemDirective>;

  ngAfterContentInit() {
    this.refreshPosition('prevPos');
    this.changesSubscription = this.items.changes.subscribe(items => {
      items.forEach((item: any) => {
        // console.log('item11',item);
        // console.log('item.newPos11', item.newPos);
        item.prevPos = item.prevPos || item.newPos;
        // console.log('item.prevPos11',item.prevPos)
      });

      items.forEach(this.runCallback);
      this.refreshPosition('newPos');
      items.forEach(this.applyTranslation);
      this.items.forEach(this.runTransition.bind(this));
    })
  }

  runCallback(item: TransitionGroupItemDirective) {
    if(item.moveCallback) {
      item.moveCallback();
    }
  }

  runTransition(item: TransitionGroupItemDirective) {
    if (!item.moved) {
      return;
    }
    const cssClass = this.class + '-move';
    let el = item.el;
    let style: any = el.style;
    el.classList.add(cssClass);
    style.transform = style.WebkitTransform = style.transitionDuration = '';
    el.addEventListener('transitionend', item.moveCallback = (e: any) => {
      if (!e || /transform$/.test(e.propertyName)) {
        el.removeEventListener('transitionend', item.moveCallback);
        item.moveCallback = null;
        el.classList.remove(cssClass);
      }
    });
  }

  refreshPosition(prop: string) {
    this.items.forEach(item => {
      item[prop] = {
        top: item.el.offsetTop,
        left: item.el.offsetLeft
      }
    });
  }

  applyTranslation(item: TransitionGroupItemDirective) {
    item.moved = false;
    // console.log('item.prevPos22',item.prevPos);
    const dx = item.prevPos.left - item.newPos.left;
    const dy = item.prevPos.top - item.newPos.top;
    if (dx || dy) {
      item.moved = true;
      let style: any = item.el.style;
      style.transform = style.WebkitTransform = 'translate(' + dx + 'px,' + dy + 'px)';
      style.transitionDuration = '0s';
    }
  }

  public ngOnDestroy(): void {
    this.changesSubscription.unsubscribe();
  }
}
