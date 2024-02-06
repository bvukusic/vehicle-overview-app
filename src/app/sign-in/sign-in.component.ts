import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {
  signInForm: FormGroup;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
    this.signInForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required, this.passwordValidator])
    });
  }

  passwordValidator(control: FormControl): { [key: string]: any } | null {
    const regex = new RegExp('^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*#?&])[A-Za-z\\d@$!%*#?&]{8,}$');
    const valid = regex.test(control.value);
    return valid ? null : { 'passwordInvalid': 'Password must be at least 8 characters, include a number and an uppercase letter.' };
  }

  onSignIn(): void {
    if (this.signInForm.valid) {
      this.authService.login();
      this.router.navigate(['/vehicle-overview']);
    }
  }
}
