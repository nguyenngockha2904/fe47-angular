import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-trang-dang-ky',
  templateUrl: './trang-dang-ky.component.html',
  styleUrls: ['./trang-dang-ky.component.scss'],
})
export class TrangDangKyComponent implements OnInit {
  @ViewChild('formDangKy') formDK: NgForm;
  mangNguoiDung: any[] = [];
  constructor() {}
  ngOnInit(): void {}
  DangKy(value: any): void {
    let index = this.mangNguoiDung.findIndex(
      (tk) => tk.TaiKhoan === value.TaiKhoan
    );
    if (index === -1) {
      this.mangNguoiDung.push(value);
    } else {
      this.mangNguoiDung[index] = value;
    }
    this.formDK.reset();
  }
  CapNhat(value: any): void {
    let TaiKhoan = value.getAttribute('data-taiKhoan');
    let MatKhau = value.getAttribute('data-matKhau');
    let Email = value.getAttribute('data-email');
    let HoTen = value.getAttribute('data-hoTen');
    let SoDT = value.getAttribute('data-soDT');
    let MaLoaiNguoiDung = value.getAttribute('data-maLoaiNguoiDung');
    this.formDK.setValue({
      TaiKhoan,
      MatKhau,
      Email,
      HoTen,
      SoDT,
      MaLoaiNguoiDung,
    });
  }
}
