import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Dashboard } from './pages/dashboard/dashboard';
import { ProjectDetails } from './pages/project-details/project-details';
import { AllProjects } from './pages/all-projects/all-projects';
import { Login } from './pages/login/login';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'admin', component: Dashboard },
  { path: 'project/:id', component: ProjectDetails },
  { path: 'all-projects', component: AllProjects },
  { path: 'login', component: Login },
  { path: '**', redirectTo: '' }, // Redirect any unknown paths to home
];
