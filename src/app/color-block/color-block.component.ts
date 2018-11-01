import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-color-block',
  templateUrl: './color-block.component.html',
  styleUrls: ['./color-block.component.scss']
})
export class ColorBlockComponent implements OnInit, OnDestroy {
  colors = ['red', 'red', 'blue', 'blue'];
  color = this.colors[0];
  id = 0;
  time: any;
  style = {
    backgroundColor: '',
    borderRadius: null
  };
  constructor() {}

  ngOnInit() {
    this.time = setInterval(() => {
      this.id++;
      this.color = this.colors[this.id % 4];
      this.style.backgroundColor = this.color;
      this.style.borderRadius = this.id % 2 === 0 ? '50%' : '';
      console.log(this.color);
    }, 500);
  }

  ngOnDestroy() {
    clearInterval(this.time);
  }
}
