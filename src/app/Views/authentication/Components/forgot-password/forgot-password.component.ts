import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {HttpErrorResponse} from "@angular/common/http";
import {ForgotPassword} from "./ForgotPassword";
import {AuthenticationService} from "../../Services/authentication.service";

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent {
  showError: boolean = false;
  errorMessage: string = '';
  showSuccess: boolean = false;
  successMessage: string = '';
  forgotPasswordForm = new FormGroup({
    email: new FormControl('', [Validators.required,Validators.email])
  });
  constructor(
    private authService: AuthenticationService
  ) {
  }
  ngOnInit() {}
  forgotPassword() {
    const request = <ForgotPassword>this.forgotPasswordForm.value
    this.authService.forgotPassword(request).subscribe({
      next : () => {
        this.showSuccess = true;
        this.successMessage = 'The link has been sent successfully, please check your email to reset password'
      },
      error:(err:HttpErrorResponse) => {
        this.showError = true;
        this.errorMessage = err.message
      }
    })
  }

  validateControl(controlName: string, errorName: string) {
    return this.forgotPasswordForm.get(controlName)?.invalid
      && this.forgotPasswordForm.get(controlName)?.touched
      && this.forgotPasswordForm.get(controlName)?.hasError(errorName)
  }
}
