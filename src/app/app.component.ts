import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angularExample';
  me = {
    name: 'Văn Tiệp',
    title: 'abc',
    phone: '123235345',
    address: 'Ha Noi'
  };
  newtime = 20;
  onTimerEnded() {
    this.newtime = 20;
  }
}
