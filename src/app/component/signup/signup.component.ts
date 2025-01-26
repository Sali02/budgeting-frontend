import {Component, inject} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {RouterLink, Router} from '@angular/router';

function equalValues(controlName1: string, controlName2: string) {
  return (control: AbstractControl) => {
    const val1 = control.get(controlName1)?.value;
    const val2 = control.get(controlName2)?.value;

    if (val1 == val2) {
      return null;
    }

    return {valuesNotEqual: true};
  }
}



@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {

  private router = inject(Router);

  form = new FormGroup({
    firstName: new FormControl('', {
      validators: [Validators.required]
    }),
    lastName: new FormControl('', {
      validators: [Validators.required]
    }),
    username: new FormControl('', {
      validators: [Validators.required]
    }),
    email: new FormControl('', {
      validators: [Validators.required, Validators.email]
    }),

    passwords: new FormGroup({
      password: new FormControl('', {
        validators: [Validators.required, Validators.minLength(8)]
      }),
        confirmPassword: new FormControl('', {
        validators: [Validators.required, Validators.minLength(8)]
      })
    },
      {
        validators: [equalValues('password', 'confirmPassword')],
      }
    )
  });

  get emailIsInvalid() {
    return (
      this.form.controls.email.touched &&
      this.form.controls.email.dirty &&
      this.form.controls.email.invalid
    );
  }

  get passwordIsInvalid() {
    const passwordsGroup = this.form.get('passwords');
    return passwordsGroup?.touched &&
      passwordsGroup?.dirty &&
      passwordsGroup.hasError('valuesNotEqual');
  }

  get passwordControl() {
    return (
      this.form.controls.passwords.controls.password.touched &&
      this.form.controls.passwords.controls.password.dirty &&
      this.form.controls.passwords.controls.password.invalid
    )
  }

  onSubmit() {
    if(this.form.valid) {
      this.router.navigate(['overview']).then();

    }
    else {
      console.log('Unsuccess', this.form.value);
      this.form.markAllAsTouched();
    }
  }

  onReset() {
    this.form.reset()
  }
}
