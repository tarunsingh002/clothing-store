import {Component, OnInit} from '@angular/core';
import {carousel} from '../../data/CarouselData';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss',
})
export class CarouselComponent implements OnInit {
  slide = 0;
  j = 0;
  slides = carousel;

  ngOnInit(): void {
    setInterval(() => {
      if (this.slide + 1 < this.slides.length) this.slide++;
      else this.slide = 0;
      // this.j = -100 * this.slide;
    }, 2000);
  }
}
