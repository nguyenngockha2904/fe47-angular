import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural',
  templateUrl: './structural.component.html',
  styleUrls: ['./structural.component.scss'],
})
export class StructuralComponent implements OnInit {
  boolean_text_ngIf: boolean = true;
  boolean_text_ngIf_else_template: boolean = false;
  islogined: boolean = false;
  color: string = 'red';
  credentials: any = { email: '', password: '' };
  listStudent: any[] = [
    { name: 'Nguyễn Văn A', age: 18 },
    { name: 'Trần Văn D', age: 20 },
    { name: 'Nguyễn Văn C', age: 21 },
    { name: 'Lê Văn D', age: 17 },
    { name: 'Nguyễn Ngọc E', age: 25 },
  ];
  constructor() {}

  ngOnInit(): void {}
  toggleStatus(): void {
    this.boolean_text_ngIf = !this.boolean_text_ngIf;
  }
  login(): void {
    this.boolean_text_ngIf_else_template = !this
      .boolean_text_ngIf_else_template;
  }
  handleDangNhap(credentials: any): void {
    if (credentials.email !== '' && credentials.password !== '') {
      this.islogined = true;
      this.credentials = credentials;
    } else {
      this.islogined = false;
    }
  }
  handleDangXuat(): void {
    this.credentials = { email: '', password: '' };
    this.islogined = false;
  }
  changeColor(color: string): void {
    this.color = color;
  }
  handleAddStudent(newStudent: any): void {
    if (newStudent.name !== '' && newStudent.age !== '') {
      this.listStudent.push(newStudent);
    }
  }
}
