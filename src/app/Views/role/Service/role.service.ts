import { Injectable } from '@angular/core';
import {RoleDto} from "../Models/RoleDto";
import {environment} from "../../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {RoleRequest} from "../Models/RoleRequest";

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  constructor(
    private httpClient : HttpClient
  ) { }

  getAllRoles() {
    return this.httpClient.get<RoleDto[]>(`${environment.domain}/api/role`)
  }

  createRole(request: RoleRequest) {
    return this.httpClient.post<RoleDto>(`${environment.domain}/api/role`, request)
  }

  updateRole(request: RoleRequest) {
    return this.httpClient.put<RoleDto>(`${environment.domain}/api/role/update/${request.id}`, request)
  }
  deleteRole(role:RoleDto){
    return this.httpClient.delete<RoleDto>(`${environment.domain}/api/role/delete/${role.id}`)
  }
}
