import {UserDto} from "../../../user/Models/UserDto";

export interface PostDto {
  "postId": string,
  "title": string,
  "description": string,
  "content": string,
  "dateCreated": Date,
  "dateUpdated": Date,
  "user": UserDto
}
