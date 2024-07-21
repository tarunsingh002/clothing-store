import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-front-page-product-slider',
  templateUrl: './front-page-product-slider.component.html',
  styleUrl: './front-page-product-slider.component.scss',
})
export class FrontPageProductSliderComponent {
  @Input() title: string;
  @Input() products: any;
}
