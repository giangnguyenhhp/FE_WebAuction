import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {LoginRequestDto} from "../login/Models/LoginRequestDto";
import {AuthResponseDto} from "../login/Models/AuthResponseDto";
import {environment} from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private http : HttpClient
  ) { }

  loginUser(request: LoginRequestDto) {
    return this.http.post<AuthResponseDto>(`${environment.domain}/api/Authenticate/login`,request)
  }
}
