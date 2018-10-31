import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <h2>{{message}}</h2>
    <app-avatar></app-avatar>
  `
})
export class HomeComponent {
  message = 'Tiệp óc tó :v ';
  constructor() {
    setTimeout(() => {
      this.message = 'Xin chào Tiệp óc tó';
    }, 2000);
  }
}
