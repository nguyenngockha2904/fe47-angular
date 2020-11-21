import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHightlight]',
})
export class BetterHightlightDirective implements OnInit {
  constructor(private el: ElementRef, private renderer2: Renderer2) {}
  ngOnInit() {
    this.renderer2.setStyle(this.el.nativeElement, 'background-color', 'blue');
    let span = this.renderer2.createElement('span');
    let text = this.renderer2.createText('Nguyễn Ngọc Kha siu đep trai');
    this.renderer2.appendChild(span, text);
    this.renderer2.appendChild(this.el.nativeElement, span);
  }
}
