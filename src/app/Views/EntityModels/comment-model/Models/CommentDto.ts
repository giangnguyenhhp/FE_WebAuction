import {UserDto} from "../../../user/Models/UserDto";

export interface CommentDto {
  "commentId": string,
  "content": string,
  "user": UserDto
}
