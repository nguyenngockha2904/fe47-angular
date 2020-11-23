import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { QuanTriGheModule } from './quan-tri-ghe/quan-tri-ghe.module';
import { TrangChuModule } from './trang-chu/trang-chu.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, TrangChuModule, QuanTriGheModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
