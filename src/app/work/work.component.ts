import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CardComponent } from '../components/card/card.component';
import { Project } from '../utils/interfaces/project';
import { projects_data } from '../utils/projects-data';

@Component({
  selector: 'app-work',
  standalone: true,
  templateUrl: './work.component.html',
  styleUrl: './work.component.scss',
  imports: [CardComponent, CommonModule],
})
export class WorkComponent implements OnInit {
  projects: Project[] = [];
  isDesign = true;
  ngOnInit(): void {
    this.projects = projects_data.filter(
      (project) => project.category === 'design'
    );
  }

  onDesignClick() {
    this.isDesign = true;
    this.projects = projects_data.filter(
      (project) => project.category === 'design'
    );
  }
  onDevClick() {
    this.isDesign = false;
    this.projects = projects_data.filter(
      (project) => project.category === 'dev'
    );
  }
}
