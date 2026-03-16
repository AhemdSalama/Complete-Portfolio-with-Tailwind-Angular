import { Component } from '@angular/core';
import { Translation } from '../../services/translation';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {
// حقن السيرفيس
  constructor(public translationService: Translation) {}
}
