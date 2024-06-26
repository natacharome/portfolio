import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AboutComponent } from '../about/about.component';
import { HeaderComponent } from "../components/header/header.component";
import { WorkComponent } from '../work/work.component';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [CommonModule, HeaderComponent, WorkComponent, AboutComponent]
})
export class HomeComponent {
  constructor() {}
 
}
