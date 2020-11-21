import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appHightlight]',
})
export class HightlightDirective implements OnInit {
  constructor(private el: ElementRef) {}
  ngOnInit() {
    let objectStyles = {
      ...this.el.nativeElement.style,
      backgroundColor: 'green',
    };
    this.el.nativeElement.style.backgroundColor = 'green';
    this.el.nativeElement.style.color = '#fff';
  }
}
