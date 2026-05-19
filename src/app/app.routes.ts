import { Routes } from '@angular/router';

import { IndexComponent } from './pages/index/index.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: IndexComponent,
  },
  {
    path: 'landing',
    redirectTo: '',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: '',
  },
];
