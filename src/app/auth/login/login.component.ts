import { Component, OnInit } from '@angular/core';
import {
  errMsg,
  getInputStatus,
  getType,
  hasError,
  signInErrorMessage,
} from 'src/app/shared';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ErrorMessages } from 'src/app/models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  faAngleLeft = faAngleLeft;
  showPassword: boolean = false;
  showConfirmPassword: boolean = false;
  email: string = '';
  password: string = '';
  loginForm: FormGroup | undefined;
  errorMessage: string | undefined;
  isError: boolean = false;

  constructor(
    private authService: AuthService,
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.loginFormCreator();
    this.formValueChanges();
  }

  loginFormCreator() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  formValueChanges() {
    this.loginForm
      ?.get('email')
      ?.valueChanges.subscribe((email) => (this.email = email));
    this.loginForm
      ?.get('password')
      ?.valueChanges.subscribe((password) => (this.password = password));
  }

  hasErrorMessage(property: string): boolean {
    return hasError(this.loginForm!, property);
  }

  getErrorMessage(controlName: string) {
    return errMsg(controlName, this.loginForm!);
  }

  signIn() {
    this.authService.SignIn(this.email, this.password).subscribe({
      next: () => this.router.navigate(['dashboard']),
      error: (error) => {
        this.isError = true;
        this.errorMessage = this.formatErrorMessage(error.message);
      },
    });
  }

  formatErrorMessage(message: string): string {
    return signInErrorMessage(message);
  }

  getStatus(property: string): string {
    return getInputStatus(this.loginForm!, property);
  }

  getInputType() {
    return getType(this.showPassword);
  }

  getConfrimPasswordType() {
    return getType(this.showConfirmPassword);
  }

  toggleShowPassword(e: Event) {
    e.preventDefault();
    this.showPassword = !this.showPassword;
  }

  toggleShowConfirmPassword(e: Event) {
    e.preventDefault();
    this.showConfirmPassword = !this.showConfirmPassword;
  }
}
