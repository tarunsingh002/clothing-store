import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CarouselComponent} from './carousel/carousel.component';
import {FrontPageComponent} from './front-page/front-page.component';
import {FrontPageProductCardComponent} from './front-page-product-card/front-page-product-card.component';
import {FrontPageProductSliderComponent} from './front-page-product-slider/front-page-product-slider.component';
import {RouterModule} from '@angular/router';
import {ProductsComponent} from './products/products.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';
import {SharedModule} from '../shared/shared.module';
import {CartComponent} from './cart/cart.component';
import {ProductDetailsComponent} from './product-details/product-details.component';
import {CheckoutComponent} from './checkout/checkout.component';
import {PaymentComponent} from './payment/payment.component';
import {PaymentSuccessComponent} from './payment-success/payment-success.component';
import {OrderComponent} from './order/order.component';
import {OrderDetailsComponent} from './order-details/order-details.component';
import {ProductReviewComponent} from './product-review/product-review.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
@NgModule({
  declarations: [
    CarouselComponent,
    FrontPageComponent,
    FrontPageProductCardComponent,
    FrontPageProductSliderComponent,
    ProductsComponent,
    CartComponent,
    ProductDetailsComponent,
    CheckoutComponent,
    PaymentComponent,
    PaymentSuccessComponent,
    OrderComponent,
    OrderDetailsComponent,
    ProductReviewComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatMenuModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    MatRadioModule,
    SharedModule,
    FormsModule,
    MatProgressBarModule,
  ],
  exports: [],
})
export class FeatureModule {}
