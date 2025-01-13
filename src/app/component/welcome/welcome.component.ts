import {Component, inject} from '@angular/core';
import {ActivatedRoute, Router, RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.scss'
})
export class WelcomeComponent {

  private router = inject(Router);
  private activatedRoute= inject(ActivatedRoute);


  onClickSignUp() {
    this.router.navigate(['/signup']).then();
  }

  onClickLogIn(): void{
    this.router.navigate(['login'], {
      relativeTo: this.activatedRoute
    }).then(success => {
      if (success) {
        console.log(success, 'success');
      }
      else
      {
        console.log(success);
      }
    });
  }
}
