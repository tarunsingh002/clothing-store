import {Component, HostListener, QueryList, ViewChildren} from '@angular/core';
// import {navData} from '../../data/nav-content';
import {MatButton} from '@angular/material/button';
import {navData} from '../../../../data/nav-content';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  isNavbarContentOpen = false;
  auth = true;

  category = navData;
  selectedSection: string;
  showExtendedMenu = false;

  @ViewChildren('openButton') openButtons: QueryList<MatButton>;

  navigateToCart() {}
  openNavBarContent(section: string) {
    if (this.isNavbarContentOpen) return false;
    this.selectedSection = section;
    this.isNavbarContentOpen = true;
    return true;
  }

  closeNavBarContent() {
    this.isNavbarContentOpen = false;
  }

  @HostListener('document:click', ['$event'])
  onNavContentClicked(event: MouseEvent) {
    // const openButtons = document.querySelectorAll('.open-button');

    let clickOnButton = false;
    // openButtons.forEach((button) => {
    //   if (button.contains(event.target as Node)) clickOnButton = true;
    // });

    if (
      event.target instanceof Element &&
      this.openButtons.filter((b) => b._elementRef.nativeElement.contains(event.target)).length
    ) {
      clickOnButton = true;
    }

    if (!clickOnButton && this.isNavbarContentOpen) this.closeNavBarContent();
  }

  toggleMenu() {
    this.showExtendedMenu = !this.showExtendedMenu;
  }
}
