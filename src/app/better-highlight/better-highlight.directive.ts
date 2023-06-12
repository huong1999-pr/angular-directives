import {
  Directive,
  OnInit,
  Renderer2,
  ElementRef,
  HostListener,
  Input,
  HostBinding,
} from '@angular/core';
@Directive({
  selector: '[appBetterHighlight]',
})
export class betterHighlightDirective {
  @Input() defaultColor: string | undefined;
  @Input() highlightColor: string = 'pink';
  @HostBinding('style.backgroundColor') backgroundColor: string | undefined;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.backgroundColor = this.defaultColor;
    //this.renderer.setStyle(this.elementRef.nativeElement,'background-color','pink');
  }

  @HostListener('mouseenter') mouseover(eventData: Event) {
    //this.renderer.setStyle(this.elementRef.nativeElement,'background-color','pink');
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    //this.renderer.setStyle(this.elementRef.nativeElement,'background-color','transparent');
    this.backgroundColor = this.defaultColor;
  }
}
