import {Component} from '@angular/core';
import {menPants} from '../../../../data/ProductsPage';
import {Router} from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss',
})
export class ProductDetailsComponent {
  selectedSize: string;
  reviews = [1, 2, 3, 4, 5];
  relatedProducts = menPants;

  constructor(private router: Router) {}
  onAddToCart() {
    console.log(this.selectedSize);
    this.router.navigate(['cart']);
  }
}
