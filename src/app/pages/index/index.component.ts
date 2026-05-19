import { Component } from '@angular/core';

import { indexLandingData } from './index.data';

@Component({
  selector: 'app-index',
  imports: [],
  templateUrl: './index.component.html',
  styleUrl: './index.component.scss',
})
export class IndexComponent {
  readonly currentYear = new Date().getFullYear();
  readonly landing = indexLandingData;
  readonly featureGalleryImages = this.landing.productFeature.images.slice(1);
  readonly ratingScale = [0, 1, 2, 3, 4];
  isMenuOpen = false;
  isPagesMenuOpen = false;

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  togglePagesMenu(event: MouseEvent): void {
    event.preventDefault();
    this.isPagesMenuOpen = !this.isPagesMenuOpen;
  }
}
