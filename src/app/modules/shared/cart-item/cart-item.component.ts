import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.scss',
})
export class CartItemComponent {
  @Input() showButtons: boolean;
  removeCartItem() {}
  updateCartItem(num: number) {}
}
