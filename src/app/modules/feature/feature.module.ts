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
import {ReactiveFormsModule} from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';
import {SharedModule} from '../shared/shared.module';
@NgModule({
  declarations: [
    CarouselComponent,
    FrontPageComponent,
    FrontPageProductCardComponent,
    FrontPageProductSliderComponent,
    ProductsComponent,
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
  ],
  exports: [FrontPageComponent, ProductsComponent],
})
export class FeatureModule {}
