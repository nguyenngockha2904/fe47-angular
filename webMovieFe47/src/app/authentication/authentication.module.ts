import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TrangDangNhapComponent } from './trang-dang-nhap/trang-dang-nhap.component';
import { TrangDangKyComponent } from './trang-dang-ky/trang-dang-ky.component';
import { AuthenticationComponent } from './authentication/authentication.component';

@NgModule({
  declarations: [
    TrangDangNhapComponent,
    TrangDangKyComponent,
    AuthenticationComponent,
  ],
  imports: [CommonModule, FormsModule],
  exports: [
    TrangDangNhapComponent,
    TrangDangKyComponent,
    AuthenticationComponent,
  ],
})
export class AuthenticationModule {}
