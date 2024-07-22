import {Component} from '@angular/core';
import {menPants} from '../../../../data/ProductsPage';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss',
})
export class ProductDetailsComponent {
  selectedSize: string;
  reviews = [1, 2, 3, 4, 5];
  relatedProducts = menPants;
  onAddToCart() {
    console.log(this.selectedSize);
  }
}
