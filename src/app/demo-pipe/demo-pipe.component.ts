import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-pipe',
  templateUrl: './demo-pipe.component.html',
  styleUrls: ['./demo-pipe.component.scss']
})
export class DemoPipeComponent implements OnInit {
  product = {
    name: 'quan ao thu dong',
    price: 500000,
    // tslint:disable-next-line:max-line-length
    image:
      // tslint:disable-next-line:max-line-length
      'https://cdn.vox-cdn.com/thumbor/axe4HmA24pA9vCfHHrGMUihibxo=/0x0:1920x1080/920x613/filters:focal(807x387:1113x693):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/60212281/Halo_TV_1920x1080.0.png',
    date: new Date()
  };
  constructor() {}

  ngOnInit() {
    setTimeout(() => {
      this.product.date.setFullYear(2001);
    }, 2000);
  }
}
