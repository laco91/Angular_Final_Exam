import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})

export class CarouselComponent implements OnInit {

  images = [
    'assets/imgs/carousel_img_1.jpg',
    'assets/imgs/carousel_img_2.jpg',
    'assets/imgs/carousel_img_3.jpg'
  ];

  constructor() { }

  ngOnInit(): void {
  }

}