import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CommentDto} from "../Models/CommentDto";
import {environment} from "../../../../../environments/environment";
import {PostNewComment} from "../Models/PostNewComment";

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(
    private http : HttpClient
  ) { }

  getAllComments() {
    return this.http.get<CommentDto[]>(`${environment.domain}/api/comment`)
  }

  postComment(request: PostNewComment) {
    return this.http.post<CommentDto>(`${environment.domain}/api/comment`,request)
  }

  deleteComment(commentId: string) {
    return this.http.delete(`${environment.domain}/api/comment/${commentId}`)
  }
}
