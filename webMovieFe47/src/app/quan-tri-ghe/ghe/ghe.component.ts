import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ghe',
  templateUrl: './ghe.component.html',
  styleUrls: ['./ghe.component.scss'],
})
export class GheComponent implements OnInit {
  @Input() gheItem: any;
  constructor() {}

  ngOnInit(): void {}
}
