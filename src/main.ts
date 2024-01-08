import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <h1>Hello from {{ name }}!</h1>
    <input [value]="firstName">
    <div [attr.role]="myAriaRole">myAriaRoleDiv</div>
    <div [class.extra-sparkle]="isDelightful">lightfulDiv</div>
  `,
})
export class App {
  name = 'Angular';
  firstName = 'firstNameValue';
  myAriaRole = 'myRole';
  isDelightful = 'lightful';
}

bootstrapApplication(App);
