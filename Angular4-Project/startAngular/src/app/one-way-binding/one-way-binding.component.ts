import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-one-way-binding',
  templateUrl: './one-way-binding.component.html',
  styleUrls: ['./one-way-binding.component.scss'],
})
export class OneWayBindingComponent implements OnInit {
  public name: string = 'Nguyễn Ngọc Kha';
  public obHocVien: any = { hoTen: 'Nguyễn Ngọc Kha', age: 18 };
  constructor() {}

  ngOnInit(): void {}
  ChangeName(obInput: any): void {
    console.log(obInput.value);
    // console.log(obInput.getAttribute('inputName'));
  }
}
