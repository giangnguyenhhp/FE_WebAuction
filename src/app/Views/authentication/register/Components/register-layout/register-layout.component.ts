import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {PasswordValidatorService} from "../../../../user/Services/password-validator.service";
import {RegisterUserRequestDto} from "../../Models/RegisterUserRequestDto";
import {UserService} from "../../../../user/Services/user.service";
import {HttpErrorResponse} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register-layout',
  templateUrl: './register-layout.component.html',
  styleUrls: ['./register-layout.component.scss']
})
export class RegisterLayoutComponent {
  registerFormGroup = new FormGroup({
    "address": new FormControl('', [Validators.required]),
    "email": new FormControl('', [Validators.required, Validators.email]),
    "userName": new FormControl('', [Validators.required]),
    "password": new FormControl('', [Validators.required]),
    "phoneNumber": new FormControl('', [Validators.required]),
    "confirmPassword": new FormControl(),
  });
  showError: boolean = false;
  errorMessage: string = '';

  constructor(
    private passwordService: PasswordValidatorService,
    private userService: UserService,
    private router : Router
  ) {
  }

  ngOnInit() {
    this.setValidators()
  }


  register() {
    const request = <RegisterUserRequestDto>this.registerFormGroup.value;
    this.showError = false;
    this.userService.registerUser(request).subscribe({
      next: (_) => {
        console.log("Successful registration");
        this.router.navigate(['/authentication/login']).then(() => {});
      },
      error: (err: HttpErrorResponse) => {
        this.errorMessage = err.message;
        this.showError = true
      }
    })
  }

  validateControl(controlName: string, errorName: string) {
      return this.registerFormGroup.get(controlName)?.invalid
        && this.registerFormGroup.get(controlName)?.touched
        && this.registerFormGroup.get(controlName)?.hasError(errorName)
  }

  setValidators() {
    this.registerFormGroup.get('confirmPassword')?.setValidators(
      [Validators.required, this.passwordService.validateConfirmPassword(this.registerFormGroup.get('password'))]
    )
  }

}
