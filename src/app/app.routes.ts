import { Routes } from '@angular/router';
import {WelcomeComponent} from "./component/welcome/welcome.component";
import {LoginComponent} from "./component/login/login.component";
import {SignupComponent} from "./component/signup/signup.component";
import {OverviewComponent} from "./component/overview/overview.component";

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: WelcomeComponent,
    title: 'Track It',
  },
  {
    path: 'login',
    component: LoginComponent,
    title: 'Log in',
  },
  {
    path: 'signup',
    component: SignupComponent,
    title: 'Signup',
  },
  {
    path: 'overview',
    component: OverviewComponent,
    title: 'Overview',
  }
];
