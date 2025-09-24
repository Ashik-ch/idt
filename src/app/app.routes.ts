import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./components/home/home').then(m => m.Home), },
  {
    path: 'inbound',
    children: [
      { path: '', loadComponent: () => import('./components/inbound/inbound').then(m => m.Inbound), },
      { path: ':state', loadComponent: () => import('./components/inbound/inbound-view/inbound-view').then(m => m.InboundView), }
    ]
  },
  {
    path: 'outbound', loadComponent: () => import('./components/outbound/outbound/outbound').then(m => m.Outbound),
  },
];
