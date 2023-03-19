import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {PasswordValidatorService} from "../../../user/Services/password-validator.service";
import {ActivatedRoute} from "@angular/router";
import {ResetPasswordDto} from "./ResetPasswordDto";
import {HttpErrorResponse} from "@angular/common/http";
import {AuthenticationService} from "../../Services/authentication.service";

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent {
  showError: boolean = false;
  errorMessage: string = '';
  showSuccess: boolean = false;
  private token: string = '';
  private email: string = '';
  resetPasswordForm = new FormGroup({
    password: new FormControl('', [Validators.required]),
    confirmPassword: new FormControl(),
  })
  ;

  constructor(
    private passwordService: PasswordValidatorService,
    private route: ActivatedRoute,
    private authService: AuthenticationService
  ) {
  }

  ngOnInit() {
    this.setValidators();
    this.route.queryParams.subscribe(params => {
      this.token = params['token'];
    })
    this.email = this.route.snapshot.queryParams['email'];
    console.log(this.token)
    console.log(this.email)
  }

  setValidators() {
    this.resetPasswordForm.get('confirmPassword')?.setValidators(
      [Validators.required, this.passwordService.validateConfirmPassword(this.resetPasswordForm.get('password'))])
  }

  validateControl(controlName: string, errorName: string) {
    return this.resetPasswordForm.get(controlName)?.invalid
      && this.resetPasswordForm.get(controlName)?.touched
      && this.resetPasswordForm.get(controlName)?.hasError(errorName)
  }

  resetPassword() {
    const request = <ResetPasswordDto>this.resetPasswordForm.value
    request.token = this.token;
    request.email = this.email;
    this.authService.resetPassword(request).subscribe({
      next: (_) => {
        this.showSuccess = true;
      },
      error: (err: HttpErrorResponse) => {
        this.showError = true;
        this.errorMessage = err.message;
      }
    })
  }
}
