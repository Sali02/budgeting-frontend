import { Routes } from '@angular/router';
import {WelcomeComponent} from "./welcome/welcome.component";
import {welcomeRoutes} from "./welcome/welcome.routes";

export const routes: Routes = [
  {
    path: '',
    component: WelcomeComponent,
    children: welcomeRoutes,
    title: 'Track It',
  }
];
