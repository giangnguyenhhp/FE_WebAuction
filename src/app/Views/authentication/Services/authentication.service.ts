import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {LoginRequestDto} from "../login/Models/LoginRequestDto";
import {environment} from "../../../../environments/environment";
import {ClaimsDto} from "../../privacy/ClaimsDto";
import {JwtHelperService} from "@auth0/angular-jwt";
import {LoginResponseDto} from "../login/Models/LoginResponseDto";
import {UserDto} from "../../user/Models/UserDto";
import {RegisterUserRequestDto} from "../register/Models/RegisterUserRequestDto";
import {RegisterResponseDto} from "../register/Models/RegisterResponseDto";
import {ForgotPassword} from "../Components/forgot-password/ForgotPassword";
import {ResetPasswordDto} from "../Components/reset-password/ResetPasswordDto";
import {CustomEncoder} from "../Components/email-confirmation/CustomEncoder";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private http : HttpClient,
    private jwtHelper : JwtHelperService
  ) { }


  loginUser(request: LoginRequestDto) {
    return this.http.post<LoginResponseDto>(`${environment.domain}/api/Authenticate/login`,request)
  }

  getClaims() {
    return this.http.get<ClaimsDto[]>(`${environment.domain}/api/Authenticate/privacy`)
  }

  isAdminLogin(){
    const token = localStorage.getItem('token')
    if(token){
      const decodeToken = this.jwtHelper.decodeToken(token);
      const role = decodeToken['http://schemas.microsoft.com/ws/2008/06/identity/claims/role']
      return role === "Admin";
    }
    return false;
  }

  registerUser(request: RegisterUserRequestDto) {
    return this.http.post<RegisterResponseDto>(`${environment.domain}/api/Authenticate/register-for-client`, request)
  }

  forgotPassword(request: ForgotPassword) {
    return this.http.post(`${environment.domain}/api/Authenticate/forgot-password`, request)
  }

  resetPassword(request: ResetPasswordDto) {
    return this.http.post(`${environment.domain}/api/Authenticate/reset-password`, request)
  }

  confirmEmail(token: string, email: string) {
    let params = new HttpParams({encoder: new CustomEncoder()})
    params = params.append('token', token);
    params = params.append('email', email);
    return this.http.get(`${environment.domain}/api/Authenticate/emailConfirmation`,{params: params})
  }

  getUserProfile() {
    return this.http.get<UserDto>(`${environment.domain}/api/Authenticate/user-profile`)
  }
}
