import { Component } from '@angular/core';
import { Translation } from '../../services/translation';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
// حقن السيرفيس هنا
  constructor(public translationService: Translation) {}
}
