import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FooterComponent} from './footer/footer.component';
import {NavbarComponent} from './navbar/navbar.component';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {ProductCardComponent} from './product-card/product-card.component';

@NgModule({
  declarations: [FooterComponent, NavbarComponent, ProductCardComponent],
  imports: [CommonModule, MatButtonModule, MatIconModule, MatMenuModule],
  exports: [FooterComponent, NavbarComponent, ProductCardComponent],
})
export class SharedModule {}
