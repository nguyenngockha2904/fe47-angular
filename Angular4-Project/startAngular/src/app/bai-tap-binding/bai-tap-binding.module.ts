import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaiTapBindingComponent } from './bai-tap-binding.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [BaiTapBindingComponent],
  imports: [CommonModule, FormsModule],
  exports: [BaiTapBindingComponent],
})
export class BaiTapBindingModule {}
