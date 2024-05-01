import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeaderComponent } from '../../components/header/header.component';
import { Project } from '../../utils/interfaces/project';
import { projects_data } from '../../utils/projects-data';
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
    selector: 'app-project',
    standalone: true,
    templateUrl: './project.component.html',
    styleUrl: './project.component.scss',
    imports: [HeaderComponent, FooterComponent]
})
export class ProjectComponent implements OnInit {
  project!: Project | undefined;
  constructor(private activatedRoute: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.project = projects_data.find((item) => item.id === +params['id']);
    });
  }
  goBack() {
    this.router.navigate(['']);
  }
}
