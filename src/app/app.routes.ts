import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./components/homeComponent/home/home').then(m => m.Home),
  },
  {
    path: 'inbound',
    loadComponent: () => import('./components/inboundComponent/inbound/inbound').then(m => m.Inbound),
  },
  {
    path: 'outbound',
    loadComponent: () => import('./components/outbound/outbound/outbound').then(m => m.Outbound),
  },
];
