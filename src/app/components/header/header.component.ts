import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  @ViewChild('logo') logo!: ElementRef<HTMLInputElement>;
  @ViewChild('about') aboutSection!: ElementRef;
  constructor(private router: Router) {}

  isHovered = false;

  navigateToHome() {
    this.router.navigate(['']);
  }
  scrollToAbout(): void {
    this.aboutSection.nativeElement.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
}
