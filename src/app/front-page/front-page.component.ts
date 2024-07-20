import {Component} from '@angular/core';
import {data} from '../../data/FrontPageData';

@Component({
  selector: 'app-front-page',
  templateUrl: './front-page.component.html',
  styleUrl: './front-page.component.scss',
})
export class FrontPageComponent {
  frontPageData = data;
}
