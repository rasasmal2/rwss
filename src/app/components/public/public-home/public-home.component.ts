import { Component } from '@angular/core';

@Component({
  selector: 'app-public-home',
  templateUrl: './public-home.component.html',
  styleUrls: ['./public-home.component.css']
})
export class PublicHomeComponent {
  slides = [
    { img: '../../../../assets/images/1.png' },
    { img: '../../../../assets/images/2.png' },
    { img: '../../../../assets/images/3.png' },
    { img: '../../../../assets/images/4.png' }
  ];
  slideConfig:any = {
    "slidesToShow": 1, "slidesToScroll": 1, "dots": true, "autoplay": true, 'responsive': [
      {
        'breakpoint': 767,
        settings: {
          arrows: false,
        }
      }
    ]
  };

}
