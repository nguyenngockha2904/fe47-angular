import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tin-tuc',
  templateUrl: './tin-tuc.component.html',
  styleUrls: ['./tin-tuc.component.scss'],
})
export class TinTucComponent implements OnInit {
  isTab: string = 'dienAnh'; //1 tab dien anh //2 tab review //3 tab khuyen mai
  constructor() {}

  ngOnInit(): void {}
  handleChangeTab(tab: string): void {
    this.isTab = tab;
  }
}
