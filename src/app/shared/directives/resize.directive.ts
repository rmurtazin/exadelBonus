import { Directive, OnInit, OnDestroy, Input, Renderer2, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[onlyForScreen]'
})
export class ResizeDirective implements OnInit, OnDestroy {
  public listenFunc: Function;
  @Input('onlyForScreen') configWidth: string;

  constructor(
    private renderer: Renderer2,
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ){}

  public ngOnInit(): void {
    this.displayElement(window.innerWidth);
    this.renderer.listen('window', 'resize', (event) => {
        this.displayElement(event.target.visualViewport.width);
    });
  }

  public displayElement(visualViewportWidth: number): void {
    if(this.isValidSize(visualViewportWidth)) {
      if(!this.viewContainer.get(0)) {
        this.viewContainer.createEmbeddedView(this.templateRef);
      }
    } else {
      this.viewContainer.clear();
    }
  }

  isValidSize(viewportWidth: number): boolean {
    if (this.configWidth === 'mobile'){
      return viewportWidth < 768;
    }
    if (this.configWidth === 'desktop'){
      return viewportWidth >= 768;
    }
  }

  ngOnDestroy() {
    this.listenFunc();
  }

}
