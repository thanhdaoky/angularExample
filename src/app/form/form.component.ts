import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  active = true;

  constructor() {}

  ngOnInit() {}
  toggle() {
    this.active = !this.active;
  }
}
