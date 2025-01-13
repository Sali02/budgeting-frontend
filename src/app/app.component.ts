import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {WelcomeComponent} from "./component/welcome/welcome.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, WelcomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'budgeting-frontend';
}
