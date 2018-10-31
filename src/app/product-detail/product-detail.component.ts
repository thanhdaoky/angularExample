import { Component, OnInit } from '@angular/core';
import { template } from '@angular/core/src/render3';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  temp: string;
  image: string;

  constructor() {}

  ngOnInit() {
    this.image =
      'https://cdn.vox-cdn.com/thumbor/axe4HmA24pA9vCfHHrGMUihibxo=/' +
      '0x0:1920x1080/920x613/filters:focal(807x387:1113x693):format(webp)' +
      '/cdn.vox-cdn.com/uploads/chorus_image/image/60212281/Halo_TV_1920x1080.0.png';
  }

  onChange(event) {
    this.temp = event.target.value;
  }

  update() {
    this.image = this.temp;
  }
}
