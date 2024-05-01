import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from '../../utils/interfaces/project';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  constructor(private router: Router) {}
  @Input() project!: Project;
  onCardClick(id: number) {
    console.log('here');
    this.router.navigate(['/project', id]);
  }
}
