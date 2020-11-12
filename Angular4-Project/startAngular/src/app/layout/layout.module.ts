import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutFooterComponent } from './layout-footer/layout-footer.component';
import { LayoutSliderComponent } from './layout-slider/layout-slider.component';
import { LayoutHeaderComponent } from './layout-header/layout-header.component';
@NgModule({
  declarations: [
    LayoutFooterComponent,
    LayoutSliderComponent,
    LayoutHeaderComponent,
  ],
  imports: [CommonModule],
  exports: [
    LayoutFooterComponent,
    LayoutHeaderComponent,
    LayoutSliderComponent,
  ],
})
export class LayoutModule {}
