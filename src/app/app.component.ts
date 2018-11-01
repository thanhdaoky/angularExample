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
  show = true;
  tree = [
    {
      name: 'level1',
      children: [
        {
          name: 'level 1.1'
        },
        {
          name: 'level 1.2'
        }
      ]
    },
    {
      name: 'level 2',
      children: []
    }
  ];

  onTimerEnded() {
    this.newtime = 20;
  }

  toggle() {
    this.show = !this.show;
  }
}
