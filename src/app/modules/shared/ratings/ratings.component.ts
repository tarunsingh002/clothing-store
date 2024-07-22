import {Component} from '@angular/core';

@Component({
  selector: 'app-ratings',
  templateUrl: './ratings.component.html',
  styleUrl: './ratings.component.scss',
})
export class RatingsComponent {
  maxRating = 5;
  initialRating = 3;

  thumbsUps: any;

  currentRating = 0;

  constructor() {
    this.thumbsUps = Array(this.maxRating)
      .fill(0)
      .map((_, i) => i + 1);
    this.currentRating = this.initialRating;
  }

  rate(rating: number) {
    this.currentRating = rating;
  }
}
