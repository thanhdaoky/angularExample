import { Component, OnInit, Input } from '@angular/core';

interface IUser {
  name: string;
  title: string;
  phone: string;
  address: string;
}
// interface dùng để
@Component({
  selector: 'app-personal-card',
  templateUrl: './personal-card.component.html',
  styleUrls: ['./personal-card.component.scss']
})
export class PersonalCardComponent implements OnInit {
  @Input() // decorator- đánh dấu input được truyền vào từ bên ngoài
  user: IUser;
  avatarimage: string;
  constructor() {}

  ngOnInit() {}
  onClick() {
    alert('HELLLLLLLLLLLLLLLLLLLOOOOOOOOOOOO');
  }
}
