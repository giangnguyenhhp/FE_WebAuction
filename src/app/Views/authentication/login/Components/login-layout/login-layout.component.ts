import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import { AuthenticationService } from '../../../Services/authentication.service';
import {LoginRequestDto} from "../../Models/LoginRequestDto";
import {Router} from "@angular/router";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-login-layout',
  templateUrl: './login-layout.component.html',
  styleUrls: ['./login-layout.component.scss']
})
export class LoginLayoutComponent {
  showError: boolean = false;
  errorMessage: string = '';
  loginForm = new FormGroup({
    userNameOrEmail: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  });

  constructor(
    private authService : AuthenticationService,
    private router : Router
  ) {
  }

  loginUser() {
    const request = <LoginRequestDto>this.loginForm.value
    this.authService.loginUser(request).subscribe({
      next:(res) => {
        localStorage.setItem("token",res.token);
        res.isAuthSuccessful = true;
        this.router.navigate(["/main"]).then(() => {
        })
      },
      error:(err:HttpErrorResponse)=>{
        this.errorMessage = err.message;
        this.showError = true;
      }
    })
  }

  validateControl(controlName: string, errorName: string) {
    return this.loginForm.get(controlName)?.invalid
      && this.loginForm.get(controlName)?.touched
      && this.loginForm.get(controlName)?.hasError(errorName)
  }
}
