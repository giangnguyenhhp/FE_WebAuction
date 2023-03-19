import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UserDto} from "../Models/UserDto";
import {environment} from "../../../../environments/environment";
import {CreateUserDto} from "../Models/CreateUserDto";
import {UpdateUserDto} from "../Models/UpdateUserDto";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private httpClient: HttpClient
  ) {
  }

  getAllUsers() {
    return this.httpClient.get<UserDto[]>(`${environment.domain}/api/user`)
  }

  createUser(request: CreateUserDto) {
    return this.httpClient.post<UserDto>(`${environment.domain}/api/user/register-for-admin`, request)
  }

  deleteUser(id: string) {
    return this.httpClient.delete(`${environment.domain}/api/user/delete/${id}`)
  }

  updateUser(request: UpdateUserDto) {
    return this.httpClient.put<UserDto>(`${environment.domain}/api/user/update/${request.id}`, request)
  }

  getUserById(id: string) {
    return this.httpClient.get<UserDto>(`${environment.domain}/api/user/${id}`)
  }
}
