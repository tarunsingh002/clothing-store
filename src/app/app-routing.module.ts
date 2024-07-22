import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FrontPageComponent} from './modules/feature/front-page/front-page.component';
import {ProductsComponent} from './modules/feature/products/products.component';
import {CartComponent} from './modules/feature/cart/cart.component';
import {ProductDetailsComponent} from './modules/feature/product-details/product-details.component';
import {CheckoutComponent} from './modules/feature/checkout/checkout.component';
import {PaymentComponent} from './modules/feature/payment/payment.component';
import {PaymentSuccessComponent} from './modules/feature/payment-success/payment-success.component';
import {OrderComponent} from './modules/feature/order/order.component';
import {OrderDetailsComponent} from './modules/feature/order-details/order-details.component';

const routes: Routes = [
  {
    path: '',
    component: FrontPageComponent,
  },
  {
    path: 'cart',
    component: CartComponent,
  },
  {
    path: 'product-details/:id',
    component: ProductDetailsComponent,
  },
  {
    path: 'checkout',
    component: CheckoutComponent,
  },
  {
    path: 'checkout/payment/:id',
    component: PaymentComponent,
  },
  {
    path: ':levelOne/:levelTwo/:levelThree',
    component: ProductsComponent,
  },
  {
    path: 'payment-success',
    component: PaymentSuccessComponent,
  },
  {
    path: 'account/order',
    component: OrderComponent,
  },
  {
    path: 'order/:id',
    component: OrderDetailsComponent,
  },
  {
    path: 'admin',
    loadChildren: () => import('./modules/admin/admin.module').then((m) => m.AdminModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
