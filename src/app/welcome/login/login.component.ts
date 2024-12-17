import { Component } from '@angular/core';
import {FormControl, ReactiveFormsModule, Validators, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  form = new FormGroup({
    username: new FormControl('', {
      validators: [Validators.required]
    }),
    password: new FormControl('', {
      validators: [Validators.required]
    }),
    remember: new FormControl(false)
  })

  onSubmit() {
    if (this.form.valid) {
      console.log('Form Successfully logged in: ', this.form.value);
    }
    else {
      console.log('Form Failed!');
      this.form.markAllAsTouched();
    }
  }
}
