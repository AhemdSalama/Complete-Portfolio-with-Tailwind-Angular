import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Translation } from '../../services/translation';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.html'
})
export class Navbar {
  isMobileMenuOpen = false;

  // حقن السيرفيس عشان نقدر نستخدمها في ה-HTML
  constructor(public translation: Translation) {}
}