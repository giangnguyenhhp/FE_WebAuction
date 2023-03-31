import {UserDto} from "../../../user/Models/UserDto";

export interface CardMemberDto {
  "cardId": string,
  "nameMember": string,
  "addressMember": string,
  "phoneNumberMember": string,
  "deposit": number,
  "user": UserDto
}
