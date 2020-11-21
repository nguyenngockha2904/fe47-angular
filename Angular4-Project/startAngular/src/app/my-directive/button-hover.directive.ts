import {
  Directive,
  ElementRef,
  HostListener,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appButtonHover]',
})
export class ButtonHoverDirective implements OnInit {
  constructor(private el: ElementRef, private render: Renderer2) {}
  ngOnInit() {
    //lắng nghe sự kiện
    this.render.setStyle(this.el.nativeElement, 'background-color', 'red');
    this.render.setStyle(this.el.nativeElement, 'color', '#fff');
  }
  @HostListener('mouseenter') suKienHover() {
    this.render.setStyle(
      this.el.nativeElement,
      'background-color',
      'transparent'
    );
    this.render.setStyle(this.el.nativeElement, 'color', '#000');
  }
  @HostListener('mouseleave') suKienMouseLeave() {
    this.render.setStyle(this.el.nativeElement, 'background-color', 'red');
    this.render.setStyle(this.el.nativeElement, 'color', '#fff');
  }
}
