import { Component } from '@angular/core';
import { AboutComponent } from '../../about/about.component';
import { HomeComponent } from '../../home/home.component';
import { WorkComponent } from '../../work/work.component';

@Component({
  selector: 'app-welcome',
  standalone: true,
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.scss',
  imports: [HomeComponent, WorkComponent, AboutComponent],
})
export class WelcomeComponent {}