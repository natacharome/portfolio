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
  @Input() isOdd!: boolean;
  async onCardClick(id: number) {
    await this.router.navigate(['/project', id]);
    window.scrollTo(0, 0);
  }
  isVoirTextVisible: boolean = false;
  voirTextPosition = { x: 0, y: 0 };

  showVoirText(event: MouseEvent) {
    this.isVoirTextVisible = true;
    this.updateVoirTextPosition(event);
  }

  hideVoirText() {
    this.isVoirTextVisible = false;
  }

  updateVoirTextPosition(event: MouseEvent) {
    const rect = (event.target as HTMLElement).getBoundingClientRect();
    this.voirTextPosition = {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    };
  }
}
