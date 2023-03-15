import {RoleDto} from "../../role/Models/RoleDto";

export interface UserDto {
  "id": string,
  "address": string,
  "userName": string,
  "email": string,
  "phoneNumber": string,
  "roles": [RoleDto]
}
