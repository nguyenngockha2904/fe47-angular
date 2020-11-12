import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  templateUrl: './two-way-binding.component.html',
  styleUrls: ['./two-way-binding.component.scss'],
})
export class TwoWayBindingComponent implements OnInit {
  public obHocVien: any = { hoTen: 'Nguyễn Ngọc Kha', age: 18 };
  constructor() {}

  ngOnInit(): void {}
  ShowName(): void {
    console.log(this.obHocVien);
  }
}
