import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-front-page-product-card',
  templateUrl: './front-page-product-card.component.html',
  styleUrl: './front-page-product-card.component.scss',
})
export class FrontPageProductCardComponent {
  @Input() product: any;
}
