import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { WorkComponent } from './work/work.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [
    CommonModule,
    RouterOutlet,
    WorkComponent,
    HomeComponent,
    AboutComponent,
  ],
})
export class AppComponent {
  title = 'portfolio';
  isDarkTheme: boolean = false;

  toggleDarkTheme(): void {
    this.isDarkTheme = !this.isDarkTheme;
    const main = document.getElementById('main');
    if (main) {
      main.classList.toggle('dark', this.isDarkTheme);
      main.classList.toggle('light', !this.isDarkTheme);
    }
    localStorage.setItem('darkMode', this.isDarkTheme ? 'true' : 'false');
  }
}
