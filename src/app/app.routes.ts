import { Routes } from '@angular/router';
import { ProjectComponent } from './pages/project/project.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';

export const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'project/:id', component: ProjectComponent },
];
