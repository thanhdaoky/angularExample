import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss']
})
export class AvatarComponent implements OnInit {
  image =
    'https://cdn.vox-cdn.com/thumbor/axe4HmA24pA9vCfHHrGMUihibxo=/' +
    '0x0:1920x1080/920x613/filters:focal(807x387:1113x693):format(webp)' +
    '/cdn.vox-cdn.com/uploads/chorus_image/image/60212281/Halo_TV_1920x1080.0.png';
  constructor() {}

  ngOnInit() {}
}
