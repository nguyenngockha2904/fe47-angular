import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attribute',
  templateUrl: './attribute.component.html',
  styleUrls: ['./attribute.component.scss'],
})
export class AttributeComponent implements OnInit {
  isHighLight: boolean = false;
  constructor() {}

  ngOnInit(): void {}
  handleToogleHighLightAttribute(): void {
    this.isHighLight = !this.isHighLight;
  }
}
