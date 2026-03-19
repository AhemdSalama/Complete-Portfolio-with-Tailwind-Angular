import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Dashboard } from './pages/dashboard/dashboard';
import { ProjectDetails } from './pages/project-details/project-details';
import { AllProjects } from './pages/all-projects/all-projects';
import { Login } from './pages/login/login';
import { authGuard } from './services/auth.guard';
import { DashboardOverview } from './pages/dashboard/overview/overview';
import { ProjectsList } from './pages/dashboard/projects-list/projects-list';
import { ProjectForm } from './pages/dashboard/project-form/project-form';
import { Messages } from './pages/dashboard/messages/messages';
import { ProfileSettings } from './pages/dashboard/profile-settings/profile-settings';

export const routes: Routes = [
  { path: '', component: Home },
  {
    path: 'dashboard',
    canActivate: [authGuard],
    component: Dashboard,
    children: [
      // TODO
      { path: '', component: DashboardOverview },
      { path: 'projects', component: ProjectsList },
      { path: 'projects/new', component: ProjectForm },
      { path: 'projects/edit/:id', component: ProjectForm },
      { path: 'messages', component: Messages },
      { path: 'profile', component: ProfileSettings },
    ],
  },
  { path: 'projects/:id', component: ProjectDetails },
  { path: 'all-projects', component: AllProjects },
  { path: 'login', component: Login },
  { path: '**', redirectTo: '' }, // Redirect any unknown paths to home
];
