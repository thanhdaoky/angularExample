import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {
  private _remaining: number;
  @Input('time') // tên dưới được áp dụng cho tên ở html.- time là alias
  // khi đặt alias thì cần đặt tên ngoài html là tên alias.
  get remaining() {
    return this._remaining;
  }
  set remaining(v: any) {
    v = +v;
    if (Number.isNaN(v)) {
      this._remaining = 10;
    } else {
      this._remaining = v;
    }
  }

  @Output()
  ended = new EventEmitter<boolean>(); // nếu bỏ <boolean> thì có thể trả về bất kì thứ gì

  constructor() {}

  ngOnInit() {
    const id = setInterval(() => {
      if (this.remaining > 0) {
        this.remaining--;
      } else {
        clearInterval(id);
        this.remaining = 10;
        this.ended.emit(true);
      }
    }, 1000);
  }
}
