import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import {FrontPageComponent} from './front-page/front-page.component';
import {CarouselComponent} from './carousel/carousel.component';
import {FrontPageProductCardComponent} from './front-page-product-card/front-page-product-card.component';
import {FrontPageProductSliderComponent} from './front-page-product-slider/front-page-product-slider.component';
import {NavbarComponent} from './navbar/navbar.component';
import {FooterComponent} from './footer/footer.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';

@NgModule({
  declarations: [
    AppComponent,
    FrontPageComponent,
    CarouselComponent,
    FrontPageProductCardComponent,
    FrontPageProductSliderComponent,
    NavbarComponent,
    FooterComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, MatButtonModule, MatIconModule, MatMenuModule],
  providers: [provideAnimationsAsync()],
  bootstrap: [AppComponent],
})
export class AppModule {}
