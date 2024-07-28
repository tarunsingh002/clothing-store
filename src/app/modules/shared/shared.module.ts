import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FooterComponent} from './footer/footer.component';
import {NavbarComponent} from './navbar/navbar.component';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {ProductCardComponent} from './product-card/product-card.component';
import {RatingsComponent} from './ratings/ratings.component';
import {RouterModule} from '@angular/router';
import {CartItemComponent} from './cart-item/cart-item.component';
import {AddressCardComponent} from './address-card/address-card.component';

@NgModule({
  declarations: [
    FooterComponent,
    NavbarComponent,
    ProductCardComponent,
    RatingsComponent,
    CartItemComponent,
    AddressCardComponent,
  ],
  imports: [CommonModule, MatButtonModule, MatIconModule, MatMenuModule, RouterModule],
  exports: [
    FooterComponent,
    NavbarComponent,
    ProductCardComponent,
    RatingsComponent,
    CartItemComponent,
    AddressCardComponent,
  ],
})
export class SharedModule {}
