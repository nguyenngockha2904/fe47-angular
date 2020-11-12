import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TwoWayBindingComponent } from './two-way-binding.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [TwoWayBindingComponent],
  imports: [CommonModule, FormsModule],
  exports: [TwoWayBindingComponent],
})
export class TwoWayBindingModule {}
