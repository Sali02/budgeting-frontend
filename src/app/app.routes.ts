import { Routes } from '@angular/router';
import {WelcomeComponent} from "./welcome/welcome.component";
import {LoginComponent} from "./welcome/login/login.component";
import {SignupComponent} from "./welcome/signup/signup.component";

export const routes: Routes = [
  {
    path: '',
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
  }
];
