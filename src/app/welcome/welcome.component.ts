import {Component, inject} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.scss'
})
export class WelcomeComponent {

  private router = inject(Router);
  private activatedRoute= inject(ActivatedRoute);


  onClickSignUp() {
    this.router.navigate(['sign-up'],{
      relativeTo: this.activatedRoute
    }).then(success => {
      if (success) {
        console.log(success);
      }
      else
      {
        console.log(success);
      }
    });
  }

  onClickLogIn(): void{
    this.router.navigate(['login'], {
      relativeTo: this.activatedRoute
    }).then(success => {
      if (success) {
        console.log(success);
      }
      else
      {
        console.log(success);
      }
    });
  }
}
