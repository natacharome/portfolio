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
    const main = document.getElementById('main');
    if (main?.classList.contains('dark')) {
      main.classList.remove('dark');
      main.classList.add('light');
    } else {
      main?.classList.add('dark');
      main?.classList.remove('light');
    }
  }
}
