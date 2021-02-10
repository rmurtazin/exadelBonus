import { AfterViewInit, Directive } from '@angular/core';

@Directive({
  selector: '[appResize]'
})
export class ResizeDirective implements AfterViewInit{
  public visible: boolean = false;
  private breakpoint: number = 768;

  ngAfterViewInit(){

  }
  
  public onResize(event) {
    const widthElement = event.target.innerWidth;
    if (widthElement >= this.breakpoint) {
      this.visible = true;
    } else {
      this.visible = false;
    }
  }


}
