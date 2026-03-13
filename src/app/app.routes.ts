import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Dashboard } from './pages/dashboard/dashboard';
import { ProjectDetails } from './pages/project-details/project-details';
import { AllProjects } from './pages/all-projects/all-projects';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'admin', component: Dashboard },
  { path: 'project/:id', component: ProjectDetails },
  { path: 'all-projects', component: AllProjects },
];
