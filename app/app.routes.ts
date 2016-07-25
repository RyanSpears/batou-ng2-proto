import { provideRouter, RouterConfig } from '@angular/router';

import { WelcomeComponent } from './home/welcome.component';
import { ClassRoutes }        from './classes/class.routes';

export const routes: RouterConfig = [
  { path: '', redirectTo: '/welcome', pathMatch: 'full'},
  { path: 'welcome', component: WelcomeComponent },
  ...ClassRoutes
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
