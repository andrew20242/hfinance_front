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
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about.component').then((m) => m.AboutComponent)
  },
  {
    path: 'accounts',
    loadComponent: () => import('./pages/accounts/accounts.component').then((m) => m.AccountsComponent)
  }
];
