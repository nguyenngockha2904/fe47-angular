import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { Baitap1Module } from './baitap1/baitap1.module';
import { LayoutModule } from './layout/layout.module';
import { OneWayBindingModule } from './one-way-binding/one-way-binding.module';
import { TwoWayBindingModule } from './two-way-binding/two-way-binding.module';
import { BaiTapBindingModule } from './bai-tap-binding/bai-tap-binding.module';
import { DirectiveModule } from './directive/directive.module';
import { MyDirectiveModule } from './my-directive/my-directive.module';
@NgModule({
  declarations: [AppComponent, FirstComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Baitap1Module,
    LayoutModule,
    OneWayBindingModule,
    TwoWayBindingModule,
    BaiTapBindingModule,
    DirectiveModule,
    MyDirectiveModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
