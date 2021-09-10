import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appMuchBetterHighlight]'
})
export class MuchBetterHighlightDirective {

  @HostBinding('style.backgroundColor') backgroundColor: string ='tranparent';

  constructor(private elRef: ElementRef) { }

  ngOnInit(){
  }

  @HostListener('mouseenter') mouseover(eventData: Event){
    this.backgroundColor = 'red';
  }

  @HostListener('mouseleave') mouseleave(eventData: Event){
    this.backgroundColor = 'transparent';
  }

}
