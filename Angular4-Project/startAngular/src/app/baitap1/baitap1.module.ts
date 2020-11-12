import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Baitap1Component } from './baitap1.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { ContentComponent } from './content/content.component';

@NgModule({
  declarations: [
    Baitap1Component,
    HeaderComponent,
    FooterComponent,
    SideBarComponent,
    ContentComponent,
  ],
  imports: [CommonModule],
  exports: [Baitap1Component],
})
export class Baitap1Module {}
