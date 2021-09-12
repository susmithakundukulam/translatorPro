import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appMuchBetterHighlightbind]'
})
export class MuchBetterHighlightbindDirective implements OnInit{

  @Input() defaultColor :  string = "transparent"
  @Input() highlightColor :  string = "blue"
  @HostBinding('style.backgroundColor') backgroundColor: string;

  ngOnInit(){
    this.backgroundColor= this.defaultColor;
  }

  constructor(private elRef: ElementRef) { }

  @HostListener('mouseenter') mouseover(eventData: Event){
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseleave(eventData: Event){
    this.backgroundColor= this.defaultColor;
  }

}
