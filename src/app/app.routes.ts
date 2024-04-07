import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    pathMatch: "full",
    path: "",
    redirectTo: "/home",
  },
  {
    path: 'home',
    loadComponent: () => import('./pages/main-page/main-page.component').then((m) => m.MainPageComponent)
  }
];
