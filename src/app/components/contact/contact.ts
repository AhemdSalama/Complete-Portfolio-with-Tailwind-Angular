import { Component } from '@angular/core';
import { Translation } from '../../services/translation';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
// حقن السيرفيس
  constructor(public translationService: Translation) {}
}
