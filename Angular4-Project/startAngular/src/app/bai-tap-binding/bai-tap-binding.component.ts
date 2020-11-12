import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bai-tap-binding',
  templateUrl: './bai-tap-binding.component.html',
  styleUrls: ['./bai-tap-binding.component.scss'],
})
export class BaiTapBindingComponent implements OnInit {
  public email: string = '';
  public fullname: string = '';
  constructor() {}

  ngOnInit(): void {}
  handleSubmit(fullname: string): void {
    this.fullname = fullname;
  }
}
