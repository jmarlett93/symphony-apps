import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () =>
      import('landing-page').then(({ LandingPage }) => LandingPage),
    title: 'Symphony Apps — Remote team games',
  },
  {
    path: '**',
    redirectTo: '',
  },
];
