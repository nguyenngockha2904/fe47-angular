import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectiveComponent } from './directive.component';
import { StructuralComponent } from './structural/structural.component';
import { AttributeComponent } from './attribute/attribute.component';
import { MyDirectiveModule } from '../my-directive/my-directive.module';
@NgModule({
  declarations: [DirectiveComponent, StructuralComponent, AttributeComponent],
  imports: [CommonModule, MyDirectiveModule],
  exports: [DirectiveComponent],
})
export class DirectiveModule {}
